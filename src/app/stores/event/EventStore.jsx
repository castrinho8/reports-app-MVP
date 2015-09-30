import Reflux from 'reflux';
import EventActions from '../../actions/event/EventActions';
import API from '../../api/API.js';
import EventsAPI from '../../api/event/EventsAPI.js';

let EventStore = Reflux.createStore({
    listenables: [EventActions],

    init: function() {
        this.state = {
            firstTermEvents: [],
            secondTermEvents: []
        }
    },

    getInitialState: function() {
        return this.state;
    },

    putGoal: function(reportId, playerParams, term) {
        let playerId = playerParams.id
        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        let params = {
            "reportId": reportId,
            "playerId": playerId,
            "name": playerParams.name,
            "number": playerParams.number,
            "teamName": playerParams.teamName,
            "type": "goal",
            "term": term
        }
        console.log(url, params)
        API.post(url, params, (err, res) => {
            // TODO Check errors
        });
    },

    putFoul: function(reportId, playerParams, term) {
        let playerId = playerParams.id
        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        let params = {
            "reportId": reportId,
            "playerId": playerId,
            "name": playerParams.name,
            "number": playerParams.number,
            "teamName": playerParams.teamName,
            "type": "foul",
            "term": term
        }
        console.log(url, params)
        API.post(url, params, (err, res) => {
            // TODO Check errors
        });
    },

    putYellowCard: function(reportId, playerParams, term) {
        let playerId = playerParams.id
        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        let params = {
            "reportId": reportId,
            "playerId": playerId,
            "name": playerParams.name,
            "number": playerParams.number,
            "teamName": playerParams.teamName,
            "type": "yellowCard",
            "term": term
        }
        console.log(url, params)
        API.post(url, params, (err, res) => {
            // TODO Check errors
        });
    },

    putRedCard: function(reportId, playerParams, term) {
        let playerId = playerParams.id
        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        let params = {
            "reportId": reportId,
            "playerId": playerId,
            "name": playerParams.name,
            "number": playerParams.number,
            "teamName": playerParams.teamName,
            "type": "redCard",
            "term": term
        }
        console.log(url, params)
        API.post(url, params, (err, res) => {
            // TODO Check errors
        });
    },

    onUpdateEventList: function(reportId)  {
        let url = EventsAPI.getEventListAPIUrl(reportId)
        API.get(url, (err, res) => {
            // Calling the end function will send the request
            let events = JSON.parse(res.text);
            let first = events.filter(function(e){return e.term==1}).reverse();
            let second = events.filter(function(e){return e.term==2}).reverse();
            // TODO CHECK IF THIS IS ONLY ONE ELEMENT
            let newState = {
                firstTermEvents: first,
                secondTermEvents: second
            }
            this.state = newState;
            this.triggerAsync(this.state);
        });
    },

    onDeleteEvent: function(eventId) {
        let url = EventsAPI.getEventAPIUrl(eventId)
        let params = {}
        console.log(url)
        API.delete(url, params, function(err, res) {
        });
    }
});

module.exports = EventStore;
