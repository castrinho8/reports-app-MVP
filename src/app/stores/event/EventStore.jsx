import Reflux from 'reflux';
import EventActions from '../../actions/event/EventActions';
import API from '../../api/API.js';
import EventsAPI from '../../api/event/EventsAPI.js';

let EventStore = Reflux.createStore({
    listenables: [EventActions],

    putGoal: function(reportId, playerId) {
        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        let params = {
            "reportId": reportId,
            "playerId": playerId,
            "type": "goal"
        }
        console.log(url, params)
        API.post(url, params, (err, res) => {
            // TODO Check errors
        });
    },

    putFoul: function(reportId, playerId) {
        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        let params = {
            "reportId": reportId,
            "playerId": playerId,
            "type": "foul"
        }
        console.log(url, params)
        API.post(url, params, (err, res) => {
            // TODO Check errors
        });
    }

});

module.exports = EventStore;
