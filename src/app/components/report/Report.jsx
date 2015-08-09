import React from 'react';
import mui from 'material-ui';

// Style import
import centerListStyle from '../../../assets/componentStyle/centerListStyle.js'
import style from './reportStyle.js'

// Components
let RaisedButton = mui.RaisedButton,
   FontIcon = mui.FontIcon,
   FlatButton = mui.FlatButton,
   Avatar = mui.Avatar,
   DropDownMenu = mui.DropDownMenu;

let periodItems = [
   { payload: '1', text: '1º period' },
   { payload: '2', text: '2º period' }
]

let Report = React.createClass( {

  render: function() {

      return (
         <div style={centerListStyle}>
            <div>
               <div>
                  <span>
                     <Avatar src="assets/img/vacmatch.png"/>
                  </span>
                  <FlatButton label="Greenpeace FC" secondary={true} />
                  <FlatButton label="Bens" secondary={true} />
                  <span>
                     <Avatar src="assets/img/vacmatch.png"/>
                  </span>
               </div>
               <h1>1 - 0</h1>
               <div>
                  <small>Faltas</small>
                  <br/>
                  <small><i>4 - 2</i></small>
               </div>
               <p>
                  <p>11:22</p>
                  <p>
                     <DropDownMenu menuItems={periodItems} />
                  </p>
                  <FlatButton label="Events" secondary={true} />
               </p>
            </div>
            <hr/>
            <p>
               <RaisedButton primary={true} >
                  <FontIcon className="fa fa-play" />
               </RaisedButton>
            </p>
            <p>
               <RaisedButton style={style.buttonStyle} label="Goal" />
               <RaisedButton style={style.buttonStyle} label="Foul" />
            </p>
            <p>
               <span><RaisedButton style={style.buttonStyle} label="Yellow Card" /></span>
               <span><RaisedButton style={style.buttonStyle} label="Red Card" /></span>
            </p>
         </div>
    )
  }
});

module.exports = Report
