import React from 'react';
import mui from 'material-ui';
import FinishedList from './FinishedList';
import PendingList from './PendingList';

let Tab = mui.Tab,
   Tabs = mui.Tabs;

let ReportList = React.createClass( {

  render() {
      return (
         <Tabs>
            <Tab label="Pendientes">
               <PendingList/>
            </Tab>
            <Tab label="Terminados">
               <FinishedList/>
            </Tab>
         </Tabs>
      )
   }
});

module.exports = ReportList
