import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import style from './endGameStyle';
import SignReport from '../signReport/SignReport';
import EndGameStore from '../../stores/endGame/EndGameStore';
import ReportActions from '../../actions/report/ReportActions.jsx'
import EventActions from '../../actions/event/EventActions.jsx'

let ThemeManager = new mui.Styles.ThemeManager();

let TextField = mui.TextField,
   RaisedButton = mui.RaisedButton,
   Tabs = mui.Tabs,
   Tab = mui.Tab;

let EndGame = React.createClass( {
    mixins: [Reflux.connect(EndGameStore, "endGame")],

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    componentWillMount: function() {
        ReportActions.updateEndGameReport(this.props.params.reportId)
    },

    _handleIncidencesChange: function(e) {
        let newReport = this.state.endGame.report
        newReport.issues = e.target.value
        this.setState({
            report: newReport
        });
    },

    _handleSendIncidences: function() {
        let reportId = this.state.endGame.report.id;
        let issues = this.state.endGame.report.issues;
        ReportActions.putIncidences(reportId, issues);
        this.refs.incidences.setErrorText("Incidencias actualizadas!")
    },

    _handleEndReport: function() {
        let reportId = this.state.endGame.report.id;
        let playerId = 1//ARBITRO
        let term = 2
        EventActions.submitEvent(reportId, playerId, 'end-match', term)
    },

   render: function() {
      return (
         <div>
            <Tabs>
               <Tab label="Árbitro">
                   <div style={style.center}>
                  <p>
                     <TextField
                        ref="incidences"
                        floatingLabelText="Incidencias"
                        hintText="Escribir incidencias"
                        multiLine={true}
                        errorStyle={{color:'green'}}
                        value={this.state.endGame.report.issues}
                        onChange={this._handleIncidencesChange}/>
                  </p>
                  <p>
                    <RaisedButton label="Enviar incidencias" primary={true} onClick={this._handleSendIncidences}/>
                  </p>
                  <p>
                    <RaisedButton label="Terminar encuentro" primary={true} onClick={this._handleEndReport}/>
                  </p>
                  </div>
                  <div>
                     <SignReport style={style}
                         players={this.state.endGame.referees} reportId={this.state.endGame.report.id}
                         sign={this.state.endGame.report.signReferee} type="referee"/>
                  </div>
               </Tab>
               <Tab label={this.state.endGame.report.match.localTeam.teamName}>
                  <SignReport style={style} teamName={this.state.endGame.report.match.localTeam.teamName}
                      players={this.state.endGame.localPlayers} reportId={this.state.endGame.report.id}
                      sign={this.state.endGame.report.signLocal} type="local"/>
               </Tab>
               <Tab label={this.state.endGame.report.match.visitorTeam.teamName}>
                  <SignReport style={style} teamName={this.state.endGame.report.match.visitorTeam.teamName}
                      players={this.state.endGame.visitorPlayers} reportId={this.state.endGame.report.id}
                      sign={this.state.endGame.report.signVisitor} type="visitor"/>
               </Tab>
            </Tabs>
         </div>
      )
   }
});

module.exports = EndGame
