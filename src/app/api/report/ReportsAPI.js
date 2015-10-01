import config from '../config.json'
import API from '../API.js'

let ReportsAPI = {

    getReportUrl: function(reportId) {
        return API.getBaseUrl() + 'reports/' + reportId;
    },

    getReportAPIUrl: function(reportId) {
        return API.getBaseAPIUrl() + 'reports/' + reportId;
    },

    getPlayerCallListAPIUrl: function(reportId, teamId) {
        return API.getBaseAPIUrl() + 'callList?reportId=' + reportId + '&teamId=' + teamId;
    },

    getCalledPlayersAPIUrl: function(reportId, teamId) {
        return API.getBaseAPIUrl() + 'callList?reportId=' + reportId +  '&teamId=' + teamId + '&isCalled=true';
    },

    putPlayerCallAPIUrl: function(playerId) {
        return API.getBaseAPIUrl() + 'callList/' + playerId
    },

    getPlayerCallListUrl: function(reportId, teamId) {
        return API.getBaseUrl() + 'player-call-list/' + reportId + '/' + teamId;
    },

    getNextGamesAPIUrl: function() {
        return API.getBaseAPIUrl() + 'nextmatch';
    },

    getFinishedGamesAPIUrl: function() {
        return API.getBaseAPIUrl() + 'finishedmatch';
    }

}

module.exports = ReportsAPI;
