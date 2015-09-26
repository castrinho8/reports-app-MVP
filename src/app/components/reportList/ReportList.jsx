import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import FinishedList from './FinishedList';
import PendingList from './PendingList';
import ReportActions from '../../actions/report/ReportActions';
import ReportListStore from '../../stores/report/ReportListStore';

let ThemeManager = new mui.Styles.ThemeManager();

let Tab = mui.Tab,
   Tabs = mui.Tabs;

let ReportList = React.createClass( {
   mixins: [Reflux.connect(ReportListStore, "lists")],

   childContextTypes: {
       muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
       return {
           muiTheme: ThemeManager.getCurrentTheme()
       };
   },

    componentWillMount: function() {
        ReportActions.updateNextGamesList()
        ReportActions.updateFinishedGamesList()
    },

    render: function() {
        return (
         <Tabs>
            <Tab label="Next games">
               <PendingList list={this.state.lists.nextGamesList}/>
            </Tab>
            <Tab label="Finished">
               <FinishedList list={this.state.lists.finishedGamesList}/>
            </Tab>
         </Tabs>
        )
    }
});

module.exports = ReportList
