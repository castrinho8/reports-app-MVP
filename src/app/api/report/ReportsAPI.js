import config from '../config.json'
import API from '../API.js'

let ReportsAPI = {

    getReportAPIUrl: function(reportId) {
        return API.getBaseAPIUrl() + 'report/' + reportId;
    },

    getPlayersListUrl: function(reportId) {
        return API.getBaseUrl() + 'player-list/' + reportId;
    },

}

module.exports = ReportsAPI;
