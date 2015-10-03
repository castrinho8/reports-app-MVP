import config from '../config.json'
import API from '../API.js'

let EventsAPI = {

    getEventListUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event/';
    },

    getGoalUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event/goal'
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

    /* -------------- Events API --------------- */

    getEventListAPIUrl: function() {
        return API.getBaseAPIUrl() + 'events/'
    },

    getEventAPIUrl: function(eventId) {
        return API.getBaseAPIUrl() + 'events/' + eventId + '/'
    },

    putEventAPIUrl: function() {
        return API.getBaseAPIUrl() + 'events/'
    },

}

module.exports = EventsAPI;
