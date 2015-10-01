import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import style from './endGameStyle';
import SignReport from '../signReport/SignReport';
import EndGameStore from '../../stores/endGame/EndGameStore';
import ReportActions from '../../actions/report/ReportActions.jsx'

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
        ReportActions.updateEndGameReport(this.props.params.reportId, function() {
            console.log(this.state.endGame.referees)
        })
    },

    _handleIncidencesChange: function(e) {
        let newReport = this.state.endGame.report
        newReport.incidences = e.target.value
        this.setState({
            report: newReport
        });
    },

    _handleSendIncidences: function() {
        let reportId = this.state.endGame.report.id;
        let incidences = this.state.endGame.report.incidences;
        ReportActions.putIncidences(reportId, incidences);
        this.refs.incidences.setErrorText("Incidencias actualizadas!")
    },

   render: function() {
      return (
         <div>
            <Tabs>
               <Tab label="Referee">
                   <div style={style.center}>
                  <p>
                     <TextField
                        ref="incidences"
                        floatingLabelText="Incidencias"
                        hintText="Escribir incidencias"
                        multiLine={true}
                        errorStyle={{color:'green'}}
                        value={this.state.endGame.report.incidences}
                        onChange={this._handleIncidencesChange}/>
                  </p>
                  <p>
                    <RaisedButton label="Enviar incidencias" primary={true} onClick={this._handleSendIncidences}/>
                  </p>
                  </div>
                  <div>
                     <SignReport style={style}
                         players={this.state.endGame.referees} reportId={this.state.endGame.report.id}
                         sign={this.state.endGame.report.signReferee} type="referee"/>
                  </div>
               </Tab>
               <Tab label={this.state.endGame.report.localTeam}>
                  <SignReport style={style} teamName={this.state.endGame.report.localTeam}
                      players={this.state.endGame.localPlayers} reportId={this.state.endGame.report.id}
                      sign={this.state.endGame.report.signLocal} type="local"/>
               </Tab>
               <Tab label={this.state.endGame.report.visitorTeam}>
                  <SignReport style={style} teamName={this.state.endGame.report.visitorTeam}
                      players={this.state.endGame.visitorPlayers} reportId={this.state.endGame.report.id}
                      sign={this.state.endGame.report.signVisitor} type="visitor"/>
               </Tab>
            </Tabs>
         </div>
      )
   }
});

module.exports = EndGame
