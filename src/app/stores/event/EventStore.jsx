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

    onSubmitEvent: function(reportId, playerId, eventType, term, description, callback) {
        let params = {
            "report": reportId,
            "player": playerId,
            "eventType": eventType,
            "term": term
        }
        if (description) params.description = description

        let url = EventsAPI.putEventAPIUrl(reportId, playerId)
        API.post(url, params, (err, res) => {
            // TODO Check errors
            if(callback) callback(err, res)
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

    onDeleteEvent: function(eventId, callback) {
        let url = EventsAPI.getEventAPIUrl(eventId)
        let params = {}
        console.log(url)
        API.delete(url, params, function(err, res) {
            callback(err, res)
        });
    }
});

module.exports = EventStore;
