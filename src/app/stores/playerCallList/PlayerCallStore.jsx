import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';

let PlayerCallStore = Reflux.createStore({
    listenables: [ReportActions],

    init: function() {
        this.playerList = []
    },

    getInitialState: function() {
        return this.playerList;
    },

    onUpdateCallList: function(reportId, teamId) {
        let url = ReportsAPI.getPlayerCallListAPIUrl(reportId, teamId)
        API.get(url, (err, res) => {
            // TODO Check errors
            let list = JSON.parse(res.text);
            this.playerList = list;
            this.triggerAsync(this.playerList);
        });
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
