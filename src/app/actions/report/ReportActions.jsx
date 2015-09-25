import Reflux from 'reflux';

let ReportListActions = Reflux.createActions([
    'updateNextGamesList',
    'updateFinishedGamesList',
    'updateReport',
    'updateCallList',
    'toggleCallPlayer'
    ]);

module.exports = ReportListActions;
