import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import EventItem from './EventItem';
import EventStore from '../../../stores/event/EventStore';
import EventActions from '../../../actions/event/EventActions';
import ReportActions from '../../../actions/report/ReportActions.jsx'
import PlayerListStore from '../../../stores/playerList/PlayerListStore'
import ReactAsync from 'react-async';
import ReportsAPI from '../../../api/report/ReportsAPI'
import API from '../../../api/API'

let ThemeManager = new mui.Styles.ThemeManager();

// Components
let List = mui.List,
   ListDivider = mui.ListDivider,
   ListItem = mui.ListItem;

let EventList = React.createClass( {
    mixins: [Reflux.connect(EventStore, "eventStore"), ReactAsync.Mixin],

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState: function() {
        return {
            players: []
        }
    },

    getInitialStateAsync: function(cb) {
        API.get(ReportsAPI.postPlayerCallAPIUrl(this.props.params.reportId), (err, res) => {
            let local = JSON.parse(res.text).map( x => x.player );
            cb(err, {players: local})
        })
    },

    componentWillMount: function() {
        EventActions.updateEventList(this.props.params.reportId)
    },

    componentDidMount: function() {
        console.log("State ", this.state)
    },
  render: function() {

      return (
         <div>
            <List subheader="Segunda parte">
               {
                  this.state.eventStore.secondTermEvents.map( eventItem => {

                     let player = this.state.players.filter(player => player.id == eventItem.player)[0]

                     if(!player) player={
                         user: {
                             first_name: "",
                             last_name: ""
                         },
                         team: {
                             teamName: ""
                         }
                     }
                      let evt = {
                          id: eventItem.id,
                          eventType: eventItem.eventType,
                          description: eventItem.description,
                          term: eventItem.term,
                          timestamp: eventItem.timestamp,
                          report: eventItem.report,
                          player: player
                      }
                     return <EventItem eventItem={evt} />
                  })
               }
            </List>
            <ListDivider />
            <List subheader="Primera parte">
               {
                  this.state.eventStore.firstTermEvents.map( eventItem => {

                      let player = this.state.players.filter(player => player.id == eventItem.player)[0]
                      if(!player) player={
                          user: {
                              first_name: "",
                              last_name: ""
                          },
                          team: {
                              teamName: ""
                          }
                      }

                      let evt = {
                          id: eventItem.id,
                          eventType: eventItem.eventType,
                          description: eventItem.description,
                          term: eventItem.term,
                          timestamp: eventItem.timestamp,
                          report: eventItem.report,
                          player: player
                      }
                     return <EventItem eventItem={evt} />
                  })
               }
            </List>
         </div>
      )
  }
});

module.exports = EventList
