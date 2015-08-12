import React from 'react';
import mui from 'material-ui';
import EventItem from './EventItem'

// Components
let List = mui.List,
   ListDivider = mui.ListDivider,
   ListItem = mui.ListItem,
   Card = mui.Card,
   CardMedia = mui.CardMedia,
   CardTitle = mui.CardTitle;

let EventList = React.createClass( {

   getInitialState: function() {
      return {
         firstPeriod: [
            {timeStamp: '17:45', number: 4, name: 'Roberta Fernández', team: 'Bens', eventIcon:'fa fa-sticky-note-o'},
            {timeStamp: '13:29', number: 3, name: 'Pepito Perez', team: 'Greenpeace FC', eventIcon:'fa fa-gavel'},
            {timeStamp: '09:24', number: 2, name: 'Fulano Detal', team: 'Greenpeace FC', eventIcon:'fa fa-gavel'},
            {timeStamp: '05:33', number: 5, name: 'David Donatello', team: 'Greenpeace FC', eventIcon:'fa fa-sticky-note'},
            {timeStamp: '05:13', number: 1, name: 'John Bruce', team: 'Bens', eventIcon:'fa fa-sticky-note-o'},
            {timeStamp: '05:13', number: 1, name: 'John Bruce', team: 'Bens', eventIcon:'fa fa-sticky-note-o'}
         ],
         secondPeriod: [
            {timeStamp: '19:38', number: 5, name: 'Manuel Arca', team: 'Greenpeace FC', eventIcon:'fa fa-futbol-o'},
            {timeStamp: '16:32', number: 2, name: 'José Magar', team: 'Greenpeace FC', eventIcon:'fa fa-gavel'},
            {timeStamp: '11:54', number: 4, name: 'Farruco Canda', team: 'Bens', eventIcon:'fa fa-gavel'},
            {timeStamp: '10:20', number: 1, name: 'Marco Bersategui', team: 'Bens', eventIcon:'fa fa-futbol-o'},
            {timeStamp: '02:12', number: 3, name: 'Julio Corral', team: 'Bens', eventIcon:'fa fa-sticky-note'}
         ]
      }
   },

  render: function() {

      return (
         <div>
            <Card>
               <CardMedia overlay={<CardTitle title="Events" subtitle="Greenpeace FC - Bens"/>}>
                  <img src="http://lorempixel.com/400/200/sports/" height="50%"/>
               </CardMedia>
               <List subheader="Second Period">
                  {
                     this.state.secondPeriod.map( player => {
                        return <EventItem player={player} />
                     })
                  }
               </List>
               <ListDivider />
               <List subheader="First Period">
                  {
                     this.state.firstPeriod.map( player => {
                        return <EventItem player={player} />
                     })
                  }
               </List>
            </Card>
         </div>
      )
  }
});

module.exports = EventList
