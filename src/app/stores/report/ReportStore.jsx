import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import request from 'superagent';
import API from '../../api/API.js';
import ReportsAPI from '../../api/report/ReportsAPI.js';

let ReportStore = Reflux.createStore({
    listenables: [ReportActions],

    getInitialState: function() {
        return {
            report: {
                "id": "",
                "localTeam": "",
                "visitorTeam": "",
                "localResult": "",
                "visitorResult": "",
                "localFouls": "",
                "visitorFouls": "",
                "events": []
            }
         }
    },

    onUpdateReport: function(reportId) {
        let url = ReportsAPI.getReportAPIUrl(reportId)
        API.get(url, (err, res) => {
            // Calling the end function will send the request
            let report = JSON.parse(res.text);
            // TODO CHECK IF THIS IS ONLY ONE ELEMENT
            this.report = report;
            this.triggerAsync(this.report);
        });
    },

});

module.exports = ReportStore;
