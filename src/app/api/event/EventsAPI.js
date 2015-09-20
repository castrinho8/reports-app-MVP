import config from '../config.json'
import API from '../API.js'

let EventsAPI = {

    getEventListUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event';
    },

    getGoalUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event?type=goal'
    },

    getFoulUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event?type=foul'
    },

    getYellowCardUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event?type=yellow-card'
    },

    getRedCardUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event?type=red-card'
    },

}

module.exports = EventsAPI;
