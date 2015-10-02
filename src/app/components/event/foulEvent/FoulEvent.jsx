import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import EventActions from '../../../actions/event/EventActions.jsx';
import EventStore from '../../../stores/event/EventStore.jsx'
import ReportsAPI from '../../../api/report/ReportsAPI.js'

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = mui.Dialog,
   Avatar = mui.Avatar,
   ListItem = mui.ListItem,
   FlatButton = mui.FlatButton,
   DropDownMenu = mui.DropDownMenu;

let options = [
    { payload:"1", text: "1" },
    { payload:"2", text: "2" }
]

let FoulEvent = React.createClass( {
    mixins: [Reflux.connect(EventStore, "event")],

   childContextTypes: {
     muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
     return {
       muiTheme: ThemeManager.getCurrentTheme()
     };
   },

   showDialog: function() {
      this.refs.foulEvent.show();
   },

   dismissDialog: function() {
       this.refs.foulEvent.dismiss();
   },

   _onDialogSubmit: function() {
       let reportId = this.props.reportId
       let playerId = this.props.eventCallUp.player.id
       let index = this.refs.term.state.selectedIndex
       let term = options[index].text
/*       let playerParams = {
           id: this.props.player.id,
           name: this.props.player.name,
           number: this.props.player.number,
           teamName: this.props.player.teamName
       }
       EventActions.putFoul(reportId, playerParams, term);
*/
       EventActions.submitEvent(reportId, playerId, 'foul', term)
       // Redirect to report page
       window.location = ReportsAPI.getReportUrl(reportId)
   },

   render: function() {
       let playerName = this.props.eventCallUp.player.user.first_name + ' ' + this.props.eventCallUp.player.user.last_name

      return (
         <div>
            <Dialog ref="foulEvent"
             title="Falta"
             actions={
                 [
                     <FlatButton
                       label="Cancelar"
                       secondary={true}
                       onTouchTap={this.dismissDialog}/>,
                     <FlatButton
                       label="Aceptar"
                       primary={true}
                       onTouchTap={this._onDialogSubmit}/>
                 ]
             }
             actionFocus="submit">
             <hr/>
             <p>
                 ¿Está seguro de añadir una falta a {playerName} número {this.props.eventCallUp.player.playerNumber}?
             </p>
             <div>
                 <h4>Seleccionar parte</h4>
                 <DropDownMenu ref="term" menuItems={options} />
             </div>
            </Dialog>
            <ListItem
               primaryText={playerName }
               secondaryText={ this.props.eventCallUp.player.playerNumber }
               leftAvatar={<Avatar src= { this.props.eventCallUp.player.avatarUrl } />} onClick={this.showDialog}/>
         </div>
    )
  }
});

module.exports = FoulEvent
