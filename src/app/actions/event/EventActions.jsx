import Reflux from 'reflux';

let EventActions = Reflux.createActions([
    'putGoal',
    'putFoul',
    'putYellowCard',
    'putRedCard',
    'updateEventList'
    ]);

module.exports = EventActions;
