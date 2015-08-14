import React from 'react';
import mui from 'material-ui';
import EventItem from './EventItem'

// Components
let List = mui.List,
   ListDivider = mui.ListDivider,
   ListItem = mui.ListItem;

let EventList = React.createClass( {

   locals: [],
   visitors: [],

   componentWillMount: function() {
      // Sample data
      this.firstPeriod = [
         {timeStamp: '17:45', number: 4, name: 'Roberta Fernández', team: 'Bens', eventIcon:'fa fa-sticky-note-o'},
         {timeStamp: '13:29', number: 3, name: 'Pepito Perez', team: 'Greenpeace FC', eventIcon:'fa fa-gavel'},
         {timeStamp: '09:24', number: 2, name: 'Fulano Detal', team: 'Greenpeace FC', eventIcon:'fa fa-gavel'},
         {timeStamp: '05:33', number: 5, name: 'David Donatello', team: 'Greenpeace FC', eventIcon:'fa fa-sticky-note'},
         {timeStamp: '05:13', number: 1, name: 'John Bruce', team: 'Bens', eventIcon:'fa fa-sticky-note-o'},
         {timeStamp: '05:13', number: 1, name: 'John Bruce', team: 'Bens', eventIcon:'fa fa-sticky-note-o'}
      ]
      this.secondPeriod = [
         {timeStamp: '19:38', number: 5, name: 'Manuel Arca', team: 'Greenpeace FC', eventIcon:'fa fa-futbol-o'},
         {timeStamp: '16:32', number: 2, name: 'José Magar', team: 'Greenpeace FC', eventIcon:'fa fa-gavel'},
         {timeStamp: '11:54', number: 4, name: 'Farruco Canda', team: 'Bens', eventIcon:'fa fa-gavel'},
         {timeStamp: '10:20', number: 1, name: 'Marco Bersategui', team: 'Bens', eventIcon:'fa fa-futbol-o'},
         {timeStamp: '02:12', number: 3, name: 'Julio Corral', team: 'Bens', eventIcon:'fa fa-sticky-note'}
      ]
   },

  render: function() {

      return (
         <div>
            <List subheader="Second Period">
               {
                  this.secondPeriod.map( player => {
                     return <EventItem player={player} />
                  })
               }
            </List>
            <ListDivider />
            <List subheader="First Period">
               {
                  this.firstPeriod.map( player => {
                     return <EventItem player={player} />
                  })
               }
            </List>
         </div>
      )
  }
});

module.exports = EventList
