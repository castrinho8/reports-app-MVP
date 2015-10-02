import React from 'react';
import mui from 'material-ui';
import ReportsAPI from '../../api/report/ReportsAPI.js'
import UserAPI from '../../api/userAPI.js'

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

   handleLogin: function() {
    UserAPI.authenticate(this.refs.username.state.hasValue, this.refs.password.state.hasValue, (cb => {
      console.log("got callback", cb);
      window.location = ReportsAPI.getReportListUrl()
      }))
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
               ref="username"
               floatingLabelText="Usuario" />
         </p>
         <p>
            <TextField
              ref="password"
               label="Password"
               floatingLabelText="Contraseña" />
         </p>
         <p>
            <FlatButton label="Aceptar" linkButton={true} onClick={this.handleLogin} primary={true} />
         </p>
      </div>
    )
  }
});

module.exports = Login
