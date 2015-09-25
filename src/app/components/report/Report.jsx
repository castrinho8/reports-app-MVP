import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import ReportStore from '../../stores/report/ReportStore.jsx'
import ReportActions from '../../actions/report/ReportActions.jsx'
import ReportsAPI from '../../api/report/ReportsAPI.js'
import EventsAPI from '../../api/event/EventsAPI.js'
import EndGameAPI from '../../api/endGame/EndGameAPI.js'

// Style import
import coreStyle from '../../../assets/componentStyle/coreStyle.js'
import style from './reportStyle.js'

let ThemeManager = new mui.Styles.ThemeManager();

// Components
let RaisedButton = mui.RaisedButton,
   FontIcon = mui.FontIcon,
   FlatButton = mui.FlatButton,
   Avatar = mui.Avatar,
   DropDownMenu = mui.DropDownMenu,
   Dialog = mui.Dialog;

const Report = React.createClass( {
    mixins: [Reflux.connect(ReportStore, "report")],

    childContextTypes: {
      muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },

    componentWillMount: function() {
      ReportActions.updateReport(this.props.params.reportId)
    },

    render: function() {
         return <div style={coreStyle.center}>
                  <div>
                     <div>
                        <span>
                           <Avatar src={this.state.report.localAvatarUrl}/>
                        </span>
                        <FlatButton label={this.state.report.localTeam}
                            linkButton={true}
                            href={ReportsAPI.getPlayerCallListUrl(this.state.report.id, this.state.report.localTeamId)}
                            secondary={true} />
                        <FlatButton label={this.state.report.visitorTeam}
                            linkButton={true}
                            href={ReportsAPI.getPlayerCallListUrl(this.state.report.id, this.state.report.visitorTeamId)}
                            secondary={true} />
                        <span>
                           <Avatar src={this.state.report.visitorAvatarUrl}/>
                        </span>
                     </div>
                     <h1>{this.state.report.localResult} - {this.state.report.visitorResult}</h1>
                     <div>
                        <small>Faltas</small>
                        <br/>
                        <small><i>{this.state.report.localFouls} - {this.state.report.visitorFouls}</i></small>
                     </div>
                  </div>
                  <hr/>
                  <div style={style.div}>
                     <RaisedButton style={style.button} label="Goal"
                         linkButton={true} href={EventsAPI.getGoalUrl(this.state.report.id)} />
                     <RaisedButton style={style.button} label="Foul"
                         linkButton={true} href={EventsAPI.getFoulUrl(this.state.report.id)} />
                  </div>
                  <div style={style.div}>
                     <RaisedButton style={style.button} label="Yellow Card"
                         linkButton={true} href={EventsAPI.getYellowCardUrl(this.state.report.id)} />
                     <RaisedButton style={style.button} label="Red Card"
                         linkButton={true} href={EventsAPI.getRedCardUrl(this.state.report.id)} />
                  </div>
                  <p>
                     <RaisedButton primary={true} label="End game"
                         linkButton={true} href={EndGameAPI.getEndGameUrl(this.state.report.id)} />
                  </p>
               </div>
      }
});

module.exports = Report
