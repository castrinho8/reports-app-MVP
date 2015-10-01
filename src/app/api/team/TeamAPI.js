import API from '../API.js'

let TeamAPI = {

    getTeamAPIUrl: function(teamId) {
        return API.getBaseAPIUrl() + 'teams/' + teamId + '/';
    },

}

module.exports = TeamAPI;
