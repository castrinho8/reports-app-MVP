import React from 'react';
import mui from 'material-ui';
import GoalEvent from '../event/goalEvent/GoalEvent'

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = mui.Dialog,
   List = mui.List,
   Avatar = mui.Avatar,
   Tabs = mui.Tabs,
   Tab = mui.Tab;

let standardActions = [
   {text: 'Cancel'},
   {text: 'Accept'}
]

let PlayerList = React.createClass( {

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
         locals: [
            {number: 1, name: 'John Bruce', avatarUrl:'assets/img/players/player1.png'},
            {number: 2, name: 'Fulano Detal', avatarUrl:'assets/img/players/player2.png'},
            {number: 3, name: 'Pepito Perez', avatarUrl:'assets/img/players/player3.png'},
            {number: 4, name: 'Roberta Fernández', avatarUrl:'assets/img/players/player4.png'},
            {number: 5, name: 'David Donatello', avatarUrl:'assets/img/players/player5.png'},
         ],
         visitors: [
            {number: 1, name: 'Marco Bersategui', avatarUrl:'assets/img/players/player6.png'},
            {number: 2, name: 'José Magar', avatarUrl:'assets/img/players/player7.png'},
            {number: 3, name: 'Julio Corral', avatarUrl:'assets/img/players/player8.png'},
            {number: 4, name: 'Farruco Canda', avatarUrl:'assets/img/players/player9.png'},
            {number: 5, name: 'Manuel Arca', avatarUrl:'assets/img/players/player10.png'},
         ]
      }
   },

  render: function() {

      return (
         <div>
            <Tabs>
               <Tab label="Local team">
                  <List>
                     {
                        this.state.locals.map( player => {
                           return <GoalEvent player={player} />
                        })
                     }
                  </List>
               </Tab>
               <Tab label="Visitor team">
                  <List>
                     {
                        this.state.visitors.map( player => {
                           return <GoalEvent player={player} />
                        })
                     }
                  </List>
               </Tab>
            </Tabs>
      </div>
    )
  }
});

module.exports = PlayerList
