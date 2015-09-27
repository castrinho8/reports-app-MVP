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
        let playerId = this.props.player.id

        if(this.props.type == 'yellow')
            EventActions.putYellowCard(reportId, playerId);
        if(this.props.type == 'red')
            EventActions.putRedCard(reportId, playerId);

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
                 Are you sure to add a {eventTexts.text} to {this.props.player.name} number {this.props.player.number}?
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

module.exports = CardEvent