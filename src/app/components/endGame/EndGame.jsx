import React from 'react';
import mui from 'material-ui';
import style from './endGameStyle';
import SignReport from '../signReport/SignReport';

let TextField = mui.TextField,
   RaisedButton = mui.RaisedButton,
   Tabs = mui.Tabs,
   Tab = mui.Tab;

let EndGame = React.createClass( {

   locals: [],
   visitors: [],
   referees: [],

   componentWillMount: function() {
      // Sample data
      this.locals = [
         {payload: '1', text: 'John Bruce'},
         {payload: '2', text: 'Fulano Detal'},
         {payload: '3', text: 'Pepito Perez'},
         {payload: '4', text: 'Roberta Fernández'},
         {payload: '5', text: 'David Donatello'},
      ]
      this.visitors = [
         {payload: '1', text: 'Marco Bersategui'},
         {payload: '2', text: 'José Magar'},
         {payload: '3', text: 'Julio Corral'},
         {payload: '4', text: 'Farruco Canda'},
         {payload: '5', text: 'Manuel Arca'},
      ]
      this.referees = [
         {payload: '1', text: 'Manolo Castro'}
      ]
   },

   render: function() {
      return (
         <div>
            <Tabs>
               <Tab label="Árbitro">
                  <div style={style.center}>
                     <TextField
                        floatingLabelText="Incidencias"
                        hintText="Escriba las incidencias"
                        multiLine={true} />
                  </div>
                  <div>
                     <SignReport style={style} players={this.referees}/>
                  </div>
               </Tab>
               <Tab label="Local">
                  <SignReport style={style} players={this.locals}/>
               </Tab>
               <Tab label="Visitante">
                  <SignReport style={style} players={this.visitors}/>
               </Tab>
            </Tabs>
         </div>
      )
   }
});

module.exports = EndGame
