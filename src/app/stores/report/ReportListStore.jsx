import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import request from 'superagent';
import config from '../config.json'

let ReportListStore = Reflux.createStore({
   listenables: [ReportActions],
   nextGamesUrl: config.nextGamesUrl,
   finishedUrl: config.finishedUrl,

   getInitialState: function() {
      return {
         nextGamesList: [],
         finishedGamesList: []
         }
   },

   onUpdateNextGamesList: function() {
      request
      .get(this.nextGamesUrl)
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/json')
      .end((err, res) => {
         // Calling the end function will send the request
         let newList = JSON.parse(res.text);
         this.nextGamesList = newList;
         let lists = {
            nextGamesList: newList,
            finishedGamesList: this.finishedGamesList
            }
         this.triggerAsync(lists);
      });
   },

   onUpdateFinishedGamesList: function() {
      request
      .get(this.finishedUrl)
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/json')
      .end((err, res) => {
         // Calling the end function will send the request
         let newList = JSON.parse(res.text);
         this.finishedGamesList = newList;

         let lists = {
            nextGamesList: this.nextGamesList,
            finishedGamesList: newList
            }
         this.triggerAsync(lists);
      });
   },

   getNextGamesList: function() {
      return this.nextGamesList;
   }

});

module.exports = ReportListStore;
