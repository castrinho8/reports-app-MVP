import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import PlayerCallItem from './PlayerCallItem'
import PlayerCallStore from '../../stores/playerCallList/PlayerCallStore'
import ReportActions from '../../actions/report/ReportActions.jsx'

// Components
let List = mui.List,
   Card = mui.Card,
   CardTitle = mui.CardTitle;
let ThemeManager = new mui.Styles.ThemeManager();

let PlayerCallList = React.createClass( {
    mixins: [Reflux.connect(PlayerCallStore, "playerCallList")],

    childContextTypes: {
     muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    componentWillMount: function() {
        ReportActions.updateCallList(this.props.params.reportId, this.props.params.teamId)
        ReportActions.updateTeamName(this.props.params.teamId)
    },

    render: function() {
        let elements
        if(!!this.state.playerCallList.playerList.length) {
                elements = this.state.playerCallList.playerList.map( player => {
                  return <PlayerCallItem key={player.id} player={player} reportId={this.props.params.reportId}/>
                })
        }

         return(
            <Card>
               <CardTitle title={this.state.playerCallList.teamName} subtitle="Call up list"/>
               <List>
                 { elements }
              </List>
           </Card>
        )
        }
});

module.exports = PlayerCallList
