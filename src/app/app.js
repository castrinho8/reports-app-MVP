import React from 'react'
import Login from './components/login/Login.jsx'
import ReportList from './components/reportList/ReportList.jsx'
import Report from './components/report/Report.jsx'
import PlayerList from './components/playerList/PlayerList.jsx'
import FoulList from './components/foulList/FoulList.jsx'
import EventList from './components/event/eventList/EventList.jsx'
import PlayerCallList from './components/playerCallList/PlayerCallList.jsx'
import EndGame from './components/endGame/EndGame.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { default as Router, Route } from 'react-router';
import mui from 'material-ui';

let DefaultRoute = Router.DefaultRoute;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors,
      AppBar = mui.AppBar,
      LeftNav = mui.LeftNav,
      MenuItem = mui.MenuItem;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let RouteHandler = Router.RouteHandler;

/*
 * Elements in Left Nav
 */
let menuItems = [
   { type: MenuItem.Types.LINK, payload: '/login', text: 'Login' },
   { type: MenuItem.Types.LINK, payload: '/report-list', text: 'Report List' },
   { type: MenuItem.Types.LINK, payload: '/report', text: 'Report' },
   { type: MenuItem.Types.LINK, payload: '/goal-list', text: 'Goal List' },
   { type: MenuItem.Types.LINK, payload: '/foul-list', text: 'Foul List' },
   { type: MenuItem.Types.LINK, payload: '/event-list', text: 'Event List' },
   { type: MenuItem.Types.LINK, payload: '/player-call-list', text: 'Call List' },
   { type: MenuItem.Types.LINK, payload: '/end-game', text: 'End game' }
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
         <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
         <RouteHandler />
      </div>
   }
})

// Routes
let routes = <Route handler={ReportsApp}>
   <Route path="login" handler={Login} />
   <Route path="report-list" handler={ReportList} />
   <Route path="report" handler={Report} />
   <Route path="goal-list" handler={PlayerList} />
   <Route path="foul-list" handler={FoulList} />
   <Route path="event-list" handler={EventList} />
   <Route path="player-call-list" handler={PlayerCallList} />
   <Route path="end-game" handler={EndGame} />
   <DefaultRoute handler={Login}/>
</Route>

Router.run(routes, Router.HistoryLocation, (Root) => {
   React.render(<Root />, document.getElementById('container'));
});
