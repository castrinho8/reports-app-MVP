import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import request from 'superagent';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';

let ReportStore = Reflux.createStore({
    listenables: [ReportActions],

    getInitialState: function() {
        return {
            report: { }
         }
    },

    onUpdateReport: function(reportId) {
        let urlSummary = ReportsAPI.getSummaryAPIUrl(reportId)
        API.get(urlSummary, (errR, resR) => {
            let summary = JSON.parse(resR.text)
            console.log(summary)

            let urlReport = ReportsAPI.getReportAPIUrl(reportId)
            API.get(urlReport, (errR, resR) => {
                let report = JSON.parse(resR.text)
                // TODO CHECK IF THIS IS ONLY ONE ELEMENT
                let reportWrapper = {
                    id: report.id,
                    localTeam: report.match.localTeam.teamName,
                    localTeamId: report.match.localTeam.id,
                    visitorTeam: report.match.visitorTeam.teamName,
                    visitorTeamId: report.match.visitorTeam.id,
                    localResult: summary.local,
                    visitorResult: summary.visitor,
                    localFouls: "",
                    visitorFouls: "",
                    localAvatarUrl: "http://lorempixel.com/400/200/sports/",
                    visitorAvatarUrl: "http://lorempixel.com/400/200/sports/",
                    referees: {
                        payload: report.owner.id,
                        text: report.owner.name
                    },
                    issues: report.issues
                }

                this.report = reportWrapper;
                this.triggerAsync(this.report);
            });
        });
    },

    onUpdateSummary: function(urlSummary, callback) {
        //let urlSummary = ReportsAPI.getSummaryAPIUrl(reportId)
        API.get(urlSummary, (err, res) => {
            let summary = JSON.parse(res.text)
            console.log(summary)
            callback(err, summary)
        })
    }
});

module.exports = ReportStore;
