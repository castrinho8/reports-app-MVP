import Reflux from 'reflux';

let EventActions = Reflux.createActions([
    'putGoal',
    'putFoul',
    'putYellowCard',
    'putRedCard'
    ]);

module.exports = EventActions;
