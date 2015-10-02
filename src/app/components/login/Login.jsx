import React from 'react';
import mui from 'material-ui';
import ReportsAPI from '../../api/report/ReportsAPI.js'

let coreStyle = require('../../../assets/componentStyle/coreStyle.js')

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
      <div style={coreStyle.center}>
         <p>
            <Avatar src='assets/img/vacmatch.png' size='100' />
         </p>
         <p>
            <TextField
               label="User"
               floatingLabelText="Usuario" />
         </p>
         <p>
            <TextField
               label="Password"
               floatingLabelText="Contraseña" />
         </p>
         <p>
            <FlatButton label="Aceptar" linkButton={true} href={ReportsAPI.getReportListUrl()} primary={true} />
         </p>
      </div>
    )
  }
});

module.exports = Login
