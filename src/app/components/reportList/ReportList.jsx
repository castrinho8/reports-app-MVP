import React from 'react';
import mui from 'material-ui';

// Styles
let centerListStyle = require('../../../assets/componentStyle/centerListStyle.js')

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors,
   List = mui.List,
   ListItem = mui.ListItem,
   Avatar = mui.Avatar;

let ReportList = React.createClass( {

   childContextTypes: {
     muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
     return {
       muiTheme: ThemeManager.getCurrentTheme()
     };
   },

  render() {

      return (
      <div>
         <List style={centerListStyle}>
            <ListItem class="list-center"
               primaryText="Local - Visitante"
               secondaryText="0 - 0"
               leftAvatar={<Avatar src="assets/img/vacmatch.png" />}
               rightAvatar={<Avatar src="assets/img/vacmatch.png" />} >
            </ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
         </List>
      </div>
    )
  }
});

module.exports = ReportList
