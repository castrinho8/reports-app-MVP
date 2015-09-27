import config from '../config.json'
import API from '../API.js'

let EventsAPI = {

    getEventListUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event';
    },

    getGoalUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event/goal'
    },

    putGoalAPIUrl: function() {
        return API.getBaseAPIUrl() + 'event/'
    },

    getFoulUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event/foul'
    },

    getYellowCardUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event/yellow-card'
    },

    getRedCardUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event/red-card'
    },

}

module.exports = EventsAPI;
