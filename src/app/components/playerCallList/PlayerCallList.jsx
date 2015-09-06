import React from 'react';
import mui from 'material-ui';
import PlayerCallItem from './PlayerCallItem'

// Components
let List = mui.List,
   Card = mui.Card,
   CardTitle = mui.CardTitle;

let PlayerCallList = React.createClass( {

   players: [],

   componentWillMount: function() {
      // Sample data
      this.players = [
         {number: 1, name: 'John Bruce', avatarUrl:'assets/img/players/player1.png'},
         {number: 2, name: 'Fulano Detal', avatarUrl:'assets/img/players/player2.png'},
         {number: 3, name: 'Pepito Perez', avatarUrl:'assets/img/players/player3.png'},
         {number: 4, name: 'Roberta Fernández', avatarUrl:'assets/img/players/player4.png'},
         {number: 5, name: 'David Donatello', avatarUrl:'assets/img/players/player5.png'}
      ]
   },

  render: function() {
     return(
        <Card>
           <CardTitle title="Greenpeace FC" subtitle="Call up list"/>
           <List>
             {
                this.players.map( player => {
                   return <PlayerCallItem player={player}/>
                })
             }
          </List>
       </Card>
    )
  }
});

module.exports = PlayerCallList
