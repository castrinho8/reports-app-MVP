import React from 'react';
import mui from 'material-ui';

// Styles
let coreStyle = require('../../../assets/componentStyle/coreStyle.js')

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let List = mui.List,
   ListItem = mui.ListItem,
   Avatar = mui.Avatar;

let FinishedList = React.createClass( {

   elements: [],

   componentWillMount: function() {
      this.elements = [
         {local: 'Libertad', visitor: 'Greenpeace FC', localGoals: 1, visitorGoals: 2, localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'},
         {local: 'Castrillón', visitor: 'Somos Nós FC', localGoals: 0, visitorGoals: 4, localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'},
         {local: 'Bens FC', visitor: 'MoMa Bar', localGoals: 1, visitorGoals: 1, localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'},
         {local: 'Os codillos', visitor: 'Chiquitín', localGoals: 3, visitorGoals: 2, localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'},
         {local: 'Portagal', visitor: 'Caronium', localGoals: 2, visitorGoals: 2, localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'},
      ]
   },

  render() {

      return (
         <List style={coreStyle.center}>
            {
               this.elements.map( match => {
                  return <ListItem class="list-center"
                     primaryText={ match.local + ' - ' + match.visitor }
                     secondaryText={ match.localGoals + ' - ' + match.visitorGoals }
                     leftAvatar={<Avatar src= { match.localAvatarUrl } />}
                     rightAvatar={<Avatar src={ match.localAvatarUrl } />} />
               })
            }
         </List>
    )
  }
});

module.exports = FinishedList
