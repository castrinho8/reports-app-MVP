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
                elements = this.state.playerCallList.playerList.map( item => {
                  return <PlayerCallItem key={item.player.id} element={item} reportId={this.props.params.reportId}/>
                })
        }

         return(
            <Card>
               <CardTitle title={this.state.playerCallList.teamName} subtitle="Lista de convocados"/>
               <List>
                 { elements }
              </List>
           </Card>
        )
        }
});

module.exports = PlayerCallList
