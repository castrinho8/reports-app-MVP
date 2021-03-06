import Reflux from 'reflux';

let ReportListActions = Reflux.createActions([
    'updateNextGamesList',
    'updateFinishedGamesList',
    'updateReport',
    'updateCallList',
    'toggleCallPlayer',
    'updateTeamName',
    'updatePlayersList',
    'updateReportInPlayerList',
    'updateEndGameReport',
    'putIncidences',
    'signReport',
    'endReport',
    'updateSummary'
    ]);

module.exports = ReportListActions;
