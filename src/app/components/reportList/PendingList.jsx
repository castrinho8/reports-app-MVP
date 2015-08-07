import React from 'react';
import mui from 'material-ui';

// Styles
let centerListStyle = require('../../../assets/componentStyle/centerListStyle.js')

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let List = mui.List,
   ListItem = mui.ListItem,
   Avatar = mui.Avatar;

let PendingList = React.createClass( {

   elements: [],

   componentWillMount: function() {
      this.elements = [
         {local: 'Libertad', visitor: 'Greenpeace FC', time: '21 January / 22:00', place: 'O Castrillón', localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'},
         {local: 'Castrillón', visitor: 'Bens', time: '1 February / 22:00', place: 'Bens', localAvatarUrl:'assets/img/vacmatch.png', visitorAvatarUrl:'assets/img/vacmatch.png'}
      ]
   },

  render() {

      return (
         <List style={centerListStyle}>
            {
               this.elements.map( match => {
                  return <ListItem class="list-center"
                     primaryText={ match.local + ' - ' + match.visitor }
                     secondaryText={ match.time + ' - ' + match.place }
                     leftAvatar={<Avatar src= { match.localAvatarUrl } />}
                     rightAvatar={<Avatar src={ match.localAvatarUrl } />} />
               })
            }
         </List>
    )
  }
});

module.exports = PendingList
