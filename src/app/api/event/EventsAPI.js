import config from '../config.json'
import API from '../API.js'

let EventsAPI = {

    getEventListUrl: function(reportId) {
        return API.getBaseUrl() + 'report/' + reportId + '/event';
    },

    getEventListAPIUrl: function() {
        return API.getBaseAPIUrl() + 'event/'
    },

    getEventAPIUrl: function(eventId) {
        return API.getBaseAPIUrl() + 'event/' + eventId
    },

    putEventAPIUrl: function() {
        return API.getBaseAPIUrl() + 'event/'
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

}

module.exports = EventsAPI;
