import Reflux from 'reflux';

let EventActions = Reflux.createActions([
    'putGoal',
    'putFoul',
    'putYellowCard',
    'putRedCard',
    'updateEventList',
    'deleteEvent'
    ]);

module.exports = EventActions;
