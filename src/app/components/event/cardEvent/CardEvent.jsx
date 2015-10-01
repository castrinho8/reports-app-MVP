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

let CardEvent = React.createClass( {
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
        this.refs.carEvent.show();
    },

    dismissDialog: function() {
        this.refs.carEvent.dismiss();
    },

    _onDialogSubmit: function() {
        let reportId = this.props.reportId
        let index = this.refs.term.state.selectedIndex
        let term = options[index].text
        let playerParams = {
            id: this.props.player.id,
            name: this.props.player.name,
            number: this.props.player.number,
            teamName: this.props.player.teamName
        }
        if(this.props.type == 'yellow')
            EventActions.putYellowCard(reportId, playerParams, term);
        if(this.props.type == 'red')
            EventActions.putRedCard(reportId, playerParams, term);

        // Redirect to report page
        window.location = ReportsAPI.getReportUrl(reportId)
    },

   render: function() {
       let eventTexts;
       if(this.props.type == 'yellow')
           eventTexts = {
               title: "Yellow Card",
               text: "yellow card"
           }
        else
            eventTexts = {
                title: "Red Card",
                text: "red card"
            }

      return (
         <div>
            <Dialog ref="carEvent"
             title={eventTexts.title}
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
                 ¿Esta seguro de añadir una {eventTexts.text} a {this.props.player.name} número {this.props.player.number}?
             </p>
             <div>
                 <h4>Seleccionar parte</h4>
                 <DropDownMenu ref="term" menuItems={options} />
             </div>
            </Dialog>
            <ListItem
               primaryText={ this.props.player.name }
               secondaryText={ this.props.player.number }
               leftAvatar={<Avatar src= { this.props.player.avatarUrl } />} onClick={this.showDialog}/>
         </div>
    )
  }
});

module.exports = CardEvent
