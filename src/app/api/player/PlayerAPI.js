import config from '../config.json'
import API from '../API.js'

let PlayersAPI = {

    getPlayersAPIUrl: function(teamId) {
        return API.getBaseAPIUrl() + 'teams/' + teamId + '/players/';
    },

}

module.exports = PlayersAPI;
