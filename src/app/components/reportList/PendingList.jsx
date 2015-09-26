import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import ReportsAPI from '../../api/report/ReportsAPI.js'

// Styles
let coreStyle = require('../../../assets/componentStyle/coreStyle.js')

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let List = mui.List,
   ListItem = mui.ListItem,
   Avatar = mui.Avatar;

let PendingList = React.createClass( {

    render: function() {
      var content = <p>Loading...</p>
      if (this.props.list) {
         content = this.props.list.map( match => {
            return <ListItem class="list-center"
               primaryText={match.local + ' - ' + match.visitor}
               secondaryText={ match.time + ' - ' + match.place }
               leftAvatar={<Avatar src= { match.localAvatarUrl } />}
               rightAvatar={<Avatar src={ match.localAvatarUrl } />}
               href={ReportsAPI.getReportUrl(match.id)}
               />
         })
      }
      return (
         <List style={coreStyle.center}>
            {content}
         </List>
    )
    }
    });

module.exports = PendingList
