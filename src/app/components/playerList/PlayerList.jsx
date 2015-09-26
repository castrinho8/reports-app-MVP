import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import GoalEvent from '../event/goalEvent/GoalEvent'
import ReportActions from '../../actions/report/ReportActions.jsx'
import PlayerListStore from '../../stores/playerList/PlayerListStore.jsx'

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = mui.Dialog,
   List = mui.List,
   Avatar = mui.Avatar,
   Tabs = mui.Tabs,
   Tab = mui.Tab;

let standardActions = [
   {text: 'Cancel'},
   {text: 'Accept'}
]

let PlayerList = React.createClass( {
    mixins: [Reflux.connect(PlayerListStore, "playerList")],

   childContextTypes: {
     muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
     return {
       muiTheme: ThemeManager.getCurrentTheme()
     };
   },

   componentWillMount: function() {
       let reportId = this.props.params.reportId
       // Update report
       ReportActions.updateReportInPlayerList(reportId, function(report) {
          let localId = report.localTeamId
          let visitorId = report.visitorTeamId
          // When report is updated, update list of players foreach team
          ReportActions.updatePlayersList(reportId, localId, visitorId)
       })
   },

  render: function() {

      return (
         <div>
            <Tabs>
               <Tab label={this.state.playerList.report.localTeam}>
                  <List>
                     {
                        this.state.playerList.localList.map( player => {
                           return <GoalEvent player={player} />
                        })
                     }
                  </List>
               </Tab>
               <Tab label={this.state.playerList.report.visitorTeam}>
                  <List>
                     {
                        this.state.playerList.visitorList.map( player => {
                           return <GoalEvent player={player} />
                        })
                     }
                  </List>
               </Tab>
            </Tabs>
      </div>
    )
  }
});

module.exports = PlayerList
