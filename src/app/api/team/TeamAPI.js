import API from '../API.js'

let TeamAPI = {

    getTeamAPIUrl: function(teamId) {
        return API.getBaseAPIUrl() + 'team/' + teamId;
    },

}

module.exports = TeamAPI;
