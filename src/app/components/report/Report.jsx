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
   DropDownMenu = mui.DropDownMenu,
   Dialog = mui.Dialog;

let periodItems = [
   { payload: '1', text: '1ª parte' },
   { payload: '2', text: '2ª parte' }
]


let Report = React.createClass( {

   render: function() {
         return <div style={centerListStyle}>
                  <div>
                     <div>
                        <span>
                           <Avatar style={style.div} src="assets/img/teams/team1.jpg"/>
                        </span>
                        <span>
                           <a href="/player-call-list">
                              <FlatButton label="Greenpeace FC" secondary={true} />
                           </a>
                        </span>
                        <FlatButton label="Bens" secondary={true} />
                        <span>
                           <Avatar style={style.div} src="assets/img/vacmatch.png"/>
                        </span>
                     </div>
                     <h1>1 - 0</h1>
                     <p>
                        <p>
                           <DropDownMenu menuItems={periodItems} />
                        </p>
                        <a href="/event-list"><FlatButton label="Eventos" secondary={true} /></a>
                     </p>
                  </div>
                  <hr/>
                  <div style={style.div}>
                     <a href="/goal-list"><RaisedButton style={style.button} label="Gol" /></a>
                     <RaisedButton style={style.button} label="Falta" />
                  </div>
                  <div style={style.div}>
                     <a href="/foul-list"><RaisedButton style={style.button} label="Tarjeta Amarilla" /></a>
                     <RaisedButton style={style.button} label="Tarjeta Roja" />
                  </div>
                  <div style={style.div}>
                     <a href="/end-game">
                        <RaisedButton primary={true} label="Terminar partido"/>
                     </a>
                  </div>
               </div>
      }
});

module.exports = Report
