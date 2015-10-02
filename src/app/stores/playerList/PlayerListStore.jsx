import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';

let PlayerListStore = Reflux.createStore({
    listenables: [ReportActions],

    init: function() {
        this.state = {
            localList: [],
            visitorList : [],
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
            }
        };
    },

    getInitialState: function() {
        return this.state;
    },

    onUpdatePlayersList: function(reportId, localTeamId, visitorTeamId) {
        // Update local team
        this.updateList(reportId, localTeamId, (err, res) => {
            let local = JSON.parse(res.text);
            // TODO CHECK ERRORS
            let state = {
                    localList: local,
                    visitorList: this.state.visitorList,
                    report: this.state.report
            }
            this.state = state
            this.triggerAsync(this.state);
        });

        // Update visitor team
        this.updateList(reportId, visitorTeamId, (err, res) => {
            let visitor = JSON.parse(res.text);
            // TODO CHECK ERRORS
            let state = {
                    localList: this.state.localList,
                    visitorList: visitor,
                    report: this.state.report
            }
            this.state = state
            this.triggerAsync(this.state);
        });
    },

    updateList: function(reportId, teamId, callback) {
        let url = ReportsAPI.getCalledPlayersAPIUrl(reportId, teamId)
        API.get(url, function(err, res) {
            callback(err, res)
        });
    },

    onUpdateReportInPlayerList: function(reportId, callback) {
        let url = ReportsAPI.getReportAPIUrl(reportId)
        API.get(url, (err, res) => {
            // Calling the end function will send the request
            let newReport = JSON.parse(res.text);
            // TODO CHECK IF THIS IS ONLY ONE ELEMENT
            let newstate = {
                    localList: this.state.localList,
                    visitorList: this.state.visitorList,
                    report: newReport
            }
            this.state = newstate;
            this.triggerAsync(this.state);
            callback(this.state.report)
        });
    }

});

module.exports = PlayerListStore;
