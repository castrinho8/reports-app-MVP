import config from '../config.json'
import API from '../API.js'

let EndGameAPI = {

    getEndGameUrl: function(reportId) {
        return API.getBaseUrl() + 'end-game/' + reportId;
    },

}

module.exports = EndGameAPI;
