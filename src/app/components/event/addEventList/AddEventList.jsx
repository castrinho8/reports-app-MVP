import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import GoalEvent from '../goalEvent/GoalEvent'
import FoulEvent from '../foulEvent/FoulEvent'
import ReportActions from '../../../actions/report/ReportActions.jsx'
import PlayerListStore from '../../../stores/playerList/PlayerListStore.jsx'

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = mui.Dialog,
   List = mui.List,
   Avatar = mui.Avatar,
   Tabs = mui.Tabs,
   Tab = mui.Tab;

let AddEventList = React.createClass( {
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
          // Update list of players for each team when report is updated
          ReportActions.updatePlayersList(reportId, localId, visitorId)
        })
    },

   // Select the event depending on the url type
   selectEvent: function(player) {
        let type = this.props.params.type
        let result = <GoalEvent player={player} reportId={this.props.params.reportId}/>

        if(type == 'goal')
            result = <GoalEvent player={player} reportId={this.props.params.reportId}/>
        if(type == 'foul')
            result = <GoalEvent player={player} reportId={this.props.params.reportId}/>
        if(type == 'yellow-card')
            result = <GoalEvent player={player} reportId={this.props.params.reportId}/>
        if(type == 'red-card')
            result = <GoalEvent player={player} reportId={this.props.params.reportId}/>

        return result
   },

    render: function() {
        return (
         <div>
            <Tabs>
               <Tab label={this.state.playerList.report.localTeam}>
                  <List>
                     {
                        this.state.playerList.localList.map( player => {
                           return this.selectEvent(player)
                        })
                     }
                  </List>
               </Tab>
               <Tab label={this.state.playerList.report.visitorTeam}>
                  <List>
                     {
                        this.state.playerList.visitorList.map( player => {
                           return this.selectEvent(player)
                        })
                     }
                  </List>
               </Tab>
            </Tabs>
        </div>
        )
    }
});

module.exports = AddEventList
