import config from '../config.json'
import API from '../API.js'

let ReportsAPI = {

    getReportUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId;
    },

    getReportListUrl: function() {
        return API.getBaseUrl() + 'report-list';
    },

    getPlayerCallListUrl: function(reportId, teamId) {
        return API.getBaseUrl() + 'player-call-list/' + reportId + '/' + teamId;
    },

    /* ------------ API URLS -------------*/

    getReportAPIUrl: function(reportId) {
        return API.getBaseAPIUrl() + 'reports/' + reportId + '/';
    },

    getReportIdAPIUrl: function(matchId) {
        return API.getBaseAPIUrl() + 'reports/' + matchId + '/';
    },

    getSummaryAPIUrl: function(reportId) {
        return API.getBaseAPIUrl() + 'reports/' + reportId + '/event_summary/';
    },

    getCalledPlayersAPIUrl: function(reportId, teamId) {
        return API.getBaseAPIUrl() + 'reports/' + reportId +  '/calledups/?teamId=' + teamId;
    },

    postCreateReportAPIUrl: function(matchId) {
        return API.getBaseAPIUrl() + 'reports/'
    },

    postPlayerCallAPIUrl: function(reportId) {
        return API.getBaseAPIUrl() + 'reports/' + reportId +  '/calledups/';
    },

    deletePlayerCallAPIUrl: function(reportId, playerId) {
        return API.getBaseAPIUrl() + 'reports/' + reportId +  '/calledups/' + playerId + '/';
    },

    getNextGamesAPIUrl: function() {
        return API.getBaseAPIUrl() + 'matches/unfinished/';
    },

    getFinishedGamesAPIUrl: function() {
        return API.getBaseAPIUrl() + 'matches/finished/';
    }

}

module.exports = ReportsAPI;
