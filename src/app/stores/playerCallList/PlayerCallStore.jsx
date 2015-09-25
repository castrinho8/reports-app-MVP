import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';
import TeamAPI from '../../api/team/TeamAPI.js';

let PlayerCallStore = Reflux.createStore({
    listenables: [ReportActions],

    init: function() {
        this.state = {
            playerList: [],
            teamName: ""
        };
    },

    getInitialState: function() {
        return this.state;
    },

    onUpdateCallList: function(reportId, teamId) {
        let url = ReportsAPI.getPlayerCallListAPIUrl(reportId, teamId)
        API.get(url, (err, res) => {
            // TODO Check errors
            let list = JSON.parse(res.text);
            let state = {
                playerList: list,
                teamName: this.state.teamName
            }
            this.state = state;
            this.triggerAsync(this.state);
        });
    },

    onUpdateTeamName: function(teamId) {
        let url = TeamAPI.getTeamAPIUrl(teamId)
        API.get(url, (err, res) => {
            // TODO Check errors
            let team = JSON.parse(res.text);
            let state = {
                playerList: this.state.playerList,
                teamName: team.teamName
            }
            this.state = state
            this.triggerAsync(this.state)
        })
    },

    onToggleCallPlayer: function(reportId, teamId, playerId, newState) {
        let url = ReportsAPI.putPlayerCallAPIUrl(playerId)
        let params = {isCalled: newState}
        let element;
        for (var i in this.playerList){
            if (this.playerList[i].id == playerId)
            element = this.playerList[i]
        }
        API.put(url, params, (err, res) => {
            // TODO Check errors
        });
    },

});

module.exports = PlayerCallStore;
