import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';
import TeamAPI from '../../api/team/TeamAPI.js';
import UserAPI from '../../api/userAPI.js';

let EndGameStore = Reflux.createStore({
    listenables: [ReportActions],

    init: function() {
        this.state = {
            report: {
                id: "",
                owner:"",
                match: {
                    id: "",
                    localTeam: {
                        id:"",
                        teamName: "",
                        teamObservations:"",
                        teamManager:""
                    } ,
                    visitorTeam: {
                        id:"",
                        teamName: "",
                        teamObservations:"",
                        teamManager:""
                    },
                    report: "",
                    date: "",
                    place: ""
                },
                issues: ""
            },
            localPlayers: [],
            visitorPlayers: [],
            referees: [{payload: 0, id: UserAPI.getUser().id, text: 'Árbitro'}]
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

            let localTeamId = gameReport.match.localTeam.id
            let visitorTeamId = gameReport.match.visitorTeam.id

            // Update referees list and report
            // TODO CHECK ERRORS
            let state = {
                    report: gameReport,
                    localPlayers: this.state.localPlayers,
                    visitorPlayers: this.state.visitorPlayers,
                    referees: this.state.referees
            }
            this.state = state
            this.triggerAsync(this.state);

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
        console.log(this.state)
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
            result.push({
            "payload": index,
            "id": player.player.user.id,
            "text": player.player.user.first_name + ' ' + player.player.user.last_name});
        })
        return result;
    },

    onPutIncidences: function(reportId, issues) {
        let url = ReportsAPI.getReportAPIUrl(reportId)
        let params = {"issues": issues}
        API.patch(url, params, function(err, res){
            // TODO CHECK ERRORS
        })
    },

    onEndReport: function() {
        let url = ""
        API.post(url, params, function(err, res){

        })
    }

});

module.exports = EndGameStore;
