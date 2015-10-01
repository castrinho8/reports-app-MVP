import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import EventItem from './EventItem';
import EventStore from '../../../stores/event/EventStore';
import EventActions from '../../../actions/event/EventActions';

let ThemeManager = new mui.Styles.ThemeManager();

// Components
let List = mui.List,
   ListDivider = mui.ListDivider,
   ListItem = mui.ListItem;

let EventList = React.createClass( {
    mixins: [Reflux.connect(EventStore, "eventStore")],

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    componentWillMount: function() {
        EventActions.updateEventList(this.props.params.reportId)
    },

  render: function() {

      return (
         <div>
            <List subheader="Segunda parte">
               {
                  this.state.eventStore.firstTermEvents.map( player => {
                     return <EventItem player={player} />
                  })
               }
            </List>
            <ListDivider />
            <List subheader="Primera parte">
               {
                  this.state.eventStore.secondTermEvents.map( player => {
                     return <EventItem player={player} />
                  })
               }
            </List>
         </div>
      )
  }
});

module.exports = EventList
