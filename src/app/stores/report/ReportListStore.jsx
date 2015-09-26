import Reflux from 'reflux';
import ReportActions from '../../actions/report/ReportActions';
import request from 'superagent';
import ReportsAPI from '../../api/report/ReportsAPI.js'
import API from '../../api/API.js';

let ReportListStore = Reflux.createStore({
   listenables: [ReportActions],

   init: function() {
       this.state = {
          nextGamesList: [],
          finishedGamesList: []
          }
   },

   getInitialState: function() {
       return this.state;
   },

    onUpdateNextGamesList: function() {
       let url = ReportsAPI.getNextGamesAPIUrl()
       API.get(url, (err, res) => {
           // Calling the end function will send the request
           let nextGames = JSON.parse(res.text);
           // TODO CHECK IF THIS IS ONLY ONE ELEMENT
           let newState = {
               nextGamesList: nextGames,
               finishedGamesList: this.state.finishedGamesList
           }
           this.state = newState;
           this.triggerAsync(this.state);
       });
    },

    onUpdateFinishedGamesList: function() {
       let url = ReportsAPI.getFinishedGamesAPIUrl()
       API.get(url, (err, res) => {
           // Calling the end function will send the request
           let finishedGames = JSON.parse(res.text);
           // TODO CHECK IF THIS IS ONLY ONE ELEMENT
           let newState = {
               nextGamesList: this.state.nextGamesList,
               finishedGamesList: finishedGames
           }
           this.state = newState;
           this.triggerAsync(this.state);
       });
    },

});

module.exports = ReportListStore;
