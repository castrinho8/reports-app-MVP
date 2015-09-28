import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';
import TeamAPI from '../../api/team/TeamAPI.js';

let EndGameStore = Reflux.createStore({
    listenables: [ReportActions],

    init: function() {
        this.state = {
            report: {},
            localPlayers: [],
            visitorPlayers: [],
            referees: []
        };
    },

    getInitialState: function() {
        return this.state;
    },

    onUpdateEndGameReport: function(reportId) {
        // Get report
        let reportUrl = ReportsAPI.getReportAPIUrl(reportId)
        API.get(reportUrl, (err, res) => {
            let gameReport = JSON.parse(res.text);

            let localTeamId = gameReport.localTeamId
            let visitorTeamId = gameReport.visitorTeamId

            // Update referees list and report
            // TODO CHECK ERRORS
            let state = {
                    report: gameReport,
                    localPlayers: this.state.localPlayers,
                    visitorPlayers: this.state.visitorPlayers,
                    referees: gameReport.referees
            }
            this.state = state
            this.trigger(this.state);

            // Update local team
            this.updateList(reportId, localTeamId, (err, res) => {
                let local = JSON.parse(res.text);
                let list = this.createList(local)
                // TODO CHECK ERRORS
                let state = {
                        report: this.state.report,
                        localPlayers: list,
                        visitorPlayers: this.state.visitorPlayers,
                        referees: this.state.referees
                }
                this.state = state
                this.triggerAsync(this.state);
            });

            // Update visitor team
            this.updateList(reportId, visitorTeamId, (err, res) => {
                let visitor = JSON.parse(res.text);
                let list = this.createList(visitor)
                // TODO CHECK ERRORS
                let state = {
                        report: this.state.report,
                        localPlayers: this.state.localPlayers,
                        visitorPlayers: list,
                        referees: this.state.referees
                }
                this.state = state
                this.triggerAsync(this.state);
            });
        });
    },

    updateList: function(reportId, teamId, callback) {
        let url = ReportsAPI.getCalledPlayersAPIUrl(reportId, teamId)
        API.get(url, function(err, res) {
            callback(err, res)
        });
    },

    createList: function(list) {
        let result = []
        list.forEach(function(player, index, array) {
            result.push({"payload": index, "text": player.name});
        })
        return result;
    },

    onPutIncidences: function(reportId, incidences) {
        let url = ReportsAPI.getReportAPIUrl(reportId)
        let params = {"incidences": incidences}
        API.put(url, params, function(err, res){
            // TODO CHECK ERRORS
        })
    }
});

module.exports = EndGameStore;
