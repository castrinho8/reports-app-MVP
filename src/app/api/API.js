import config from './config.json'
import request from 'superagent';


let API = {

    getBaseUrl: function() {
        return config.frontEnd.host + ':' + config.frontEnd.port + '/#/';
    },

    getBaseAPIUrl: function() {
        return config.backEnd.host + ':' + config.backEnd.port + '/';
    },

    get: function(url, callback) {
        request
        .get(url)
        .set('Access-Control-Allow-Origin', '*')
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback(err, res);
        });
    }

}

module.exports = API
