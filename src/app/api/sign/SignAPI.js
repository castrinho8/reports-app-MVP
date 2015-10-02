import config from '../config.json'
import API from '../API.js'

let SignAPI = {

    getSignAPIUrl: function(reportId) {
        return API.getBaseAPIUrl() + 'signatures/';
    }
}

module.exports = SignAPI;
