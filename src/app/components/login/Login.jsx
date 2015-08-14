import React from 'react';
import mui from 'material-ui';

let centerListStyle = require('../../../assets/componentStyle/centerListStyle.js')

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors,
   TextField = mui.TextField,
   Avatar = mui.Avatar,
   FlatButton = mui.FlatButton;

let Login = React.createClass( {

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
      <div style={centerListStyle}>
         <p>
            <Avatar src='assets/img/vacmatch.png' size='100' />
         </p>
         <p>
            <TextField
               label="User"
               floatingLabelText="Username" />
         </p>
         <p>
            <TextField
               label="Password"
               floatingLabelText="Password" />
         </p>
         <p>
            <a href="/report-list"><FlatButton label="Accept" primary={true} /></a>
         </p>
      </div>
    )
  }
});

module.exports = Login
