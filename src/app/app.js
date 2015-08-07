import React from 'react'
import ReportsApp from './components/reportsApp/ReportsApp.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

React.render(
   <ReportsApp />,
   document.getElementById('container')
)
