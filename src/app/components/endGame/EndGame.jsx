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

   render: function() {
      return (
         <div>
            <Tabs>
               <Tab label="Referee">
                   <div style={style.center}>
                  <p>
                     <TextField
                        floatingLabelText="Incidences"
                        hintText="Write incidences"
                        multiLine={true}
                        value={this.state.endGame.report.incidences}
                        onChange={this._handleIncidencesChange}/>
                  </p>
                  <p>
                    <RaisedButton label="Send incidences" primary={true} />
                  </p>
                  </div>
                  <div>
                     <SignReport style={style} players={this.state.endGame.referees}/>
                  </div>
               </Tab>
               <Tab label={this.state.endGame.report.localTeam}>
                  <SignReport style={style} teamName={this.state.endGame.report.localTeam} players={this.state.endGame.localPlayers}/>
               </Tab>
               <Tab label={this.state.endGame.report.visitorTeam}>
                  <SignReport style={style} teamName={this.state.endGame.report.visitorTeam} players={this.state.endGame.visitorPlayers}/>
               </Tab>
            </Tabs>
         </div>
      )
   }
});

module.exports = EndGame
