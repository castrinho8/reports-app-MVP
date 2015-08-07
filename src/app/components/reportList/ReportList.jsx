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
            <Tab label="Next games">
               <PendingList/>
            </Tab>
            <Tab label="Finished">
               <FinishedList/>
            </Tab>
         </Tabs>
      )
   }
});

module.exports = ReportList
