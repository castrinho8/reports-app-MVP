import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import API from '../../api/API.js';
import SignAPI from '../../api/sign/SignAPI.js';

let SignStore = Reflux.createStore({
    listenables: [ReportActions],

    onSignReport: function(reportId, signerId, date, callback) {
        let url = SignAPI.getSignAPIUrl()
        let params = {
            report: reportId,
            signer: signerId,
            date: ""
        }

        API.post(url, params, function(err, res){
            // TODO CHECK ERRORS
            if(callback) callback(err, res)
        })
    },

});

module.exports = SignStore;
