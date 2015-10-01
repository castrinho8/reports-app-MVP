import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';
import TeamAPI from '../../api/team/TeamAPI.js';
import PlayersAPI from '../../api/player/PlayerAPI.js';

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
        // Get all players list
        let allUrl = PlayersAPI.getPlayersAPIUrl(teamId)
        API.get(allUrl, (err, res) => {
            // TODO Check errors
            let playersList = JSON.parse(res.text);

            // Get only called players in this report
            let calledUrl = ReportsAPI.getCalledPlayersAPIUrl(reportId, teamId)
            API.get(calledUrl, (err, res) => {
                // TODO Check errors
                let calledList = JSON.parse(res.text);

                // Get a wrapper list with all players in team and if they are called
                let list = []
                for(var i in playersList){
                    let element = playersList[i]
                    // Check if this player is in the called list
                    let exists = calledList.filter(function(e) {return e.player.id==element.id}).length > 0
                    let wrapper = {
                        player: element,
                        isCalled: exists
                    }
                    list.push(wrapper)
                }

                // Set the list in the state
                let state = {
                    playerList: list,
                    teamName: this.state.teamName
                }
                this.state = state;
                this.triggerAsync(this.state);
            });
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
        let params = { player: playerId }

        // If the new state is true it means that the player has to be called
        if(newState){
            // Create new Call
            let url = ReportsAPI.postPlayerCallAPIUrl(reportId)
            API.post(url, params, (err, res) => {
                // TODO Check errors
            });
        } else{
            // Delete call
            let url = ReportsAPI.deletePlayerCallAPIUrl(reportId, playerId)
            API.delete(url, {},  (err, res) => {
                // TODO Check errors
            });
        }
    },

});

module.exports = PlayerCallStore;
