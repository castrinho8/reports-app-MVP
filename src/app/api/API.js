import config from './config.json'
import request from 'superagent';


let API = {

    getBaseUrl: function() {
        return config.frontEnd.host + ':' + config.frontEnd.port + '/#/';
    },

    getBaseAPIUrl: function() {
        return config.backEnd.host + ':' + config.backEnd.port + '/' + config.backEnd.api + '/';
    },

    get: function(url, callback) {
        request
        .get(url)
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback(err, res);
        });
    },

    put: function(url, params, callback) {
        request
        .put(url)
        .send(params)
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback(err, res);
        });
    },

    post: function(url, params, callback) {
        request
        .post(url)
        .send(params)
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback(err, res);
        });
    },

    delete: function(url, params, callback) {
        request
        .del(url)
        .send(params)
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback(err, res);
        });
    },

    patch: function(url, params, callback) {
        request
        .patch(url)
        .send(params)
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback(err, res);
        });
    },
}

module.exports = API
