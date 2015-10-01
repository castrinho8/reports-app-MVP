import React from 'react'
import Login from './components/login/Login.jsx'
import ReportList from './components/reportList/ReportList.jsx'
import Report from './components/report/Report.jsx'
import AddEventList from './components/event/addEventList/AddEventList.jsx'
import EventList from './components/event/eventList/EventList.jsx'
import PlayerCallList from './components/playerCallList/PlayerCallList.jsx'
import EndGame from './components/endGame/EndGame.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute } from 'react-router';
import mui from 'material-ui';
import coreStyle from '../assets/componentStyle/coreStyle.js'

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors,
      AppBar = mui.AppBar,
      LeftNav = mui.LeftNav,
      MenuItem = mui.MenuItem,
      Avatar = mui.Avatar;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/*
 * Elements in Left Nav
 */
let menuItems = [
    { type: MenuItem.Types.SUBHEADER, text: 'Actas' },
    { type: MenuItem.Types.LINK, payload: '/#/report-list', text: 'Lista de actas' }
]

/*
 * Reports APP component
 */
let ReportsApp = React.createClass( {

   childContextTypes: {
     muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
     return {
       muiTheme: ThemeManager.getCurrentTheme()
     };
   },

   _handleTouchTap: function() {
      this.refs.leftNav.toggle();
   },

   render() {
      return <div>
         <AppBar
           title="VACmatch"
           iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this._handleTouchTap}/>
       <LeftNav ref="leftNav" docked={false} menuItems={menuItems}
           header={
               <Avatar src='assets/img/vacmatch.png' size='100' style={coreStyle.avatar} />
           }/>
         {this.props.children}
      </div>
   }
})

React.render((
    <Router>
        <Route path="/" component={ReportsApp}>
            <IndexRoute component={Login} />
            <Route path="login" component={Login} />
            <Route path="report-list" component={ReportList} />
            <Route path="report/:reportId" component={Report} />
            <Route path="report/:reportId/event" component={EventList} />
            <Route path="report/:reportId/event/:type" component={AddEventList} />
            <Route path="player-call-list/:reportId/:teamId" component={PlayerCallList} />
            <Route path="end-game/:reportId" component={EndGame} />
            <Route path="*" component={Login} />
        </Route>
    </Router>
), document.getElementById('container'));
