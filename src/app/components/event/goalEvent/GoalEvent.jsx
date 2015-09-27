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
   FlatButton = mui.FlatButton;

let GoalEvent = React.createClass( {
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
      this.refs.goalEvent.show();
   },

   dismissDialog: function() {
       this.refs.goalEvent.dismiss();
   },

   _onDialogSubmit: function() {
       let reportId = this.props.reportId
       let playerId = this.props.player.id
       EventActions.putGoal(reportId, playerId);
       // Redirect to report page
       window.location = ReportsAPI.getReportUrl(reportId)
   },

   render: function() {

      return (
         <div>
            <Dialog ref="goalEvent"
             title="Goal"
             actions={
                 [
                     <FlatButton
                       label="Cancel"
                       secondary={true}
                       onTouchTap={this.dismissDialog}/>,
                     <FlatButton
                       label="Submit"
                       primary={true}
                       onTouchTap={this._onDialogSubmit}/>
                 ]
             }
             actionFocus="submit">
             <hr/>
             <p>
                Are you sure to add a goal to {this.props.player.name} number {this.props.player.number}?
             </p>
            </Dialog>
            <ListItem
               primaryText={ this.props.player.name }
               secondaryText={ this.props.player.number }
               leftAvatar={<Avatar src= { this.props.player.avatarUrl } />} onClick={this.showDialog}/>
         </div>
    )
  }
});

module.exports = GoalEvent
