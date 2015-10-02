import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import ReportsAPI from '../../api/report/ReportsAPI.js'
import API from '../../api/API.js'
import UserAPI from '../../api/userAPI.js'

// Styles
let coreStyle = require('../../../assets/componentStyle/coreStyle.js')

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let List = mui.List,
   ListItem = mui.ListItem,
   Avatar = mui.Avatar;

let PendingList = React.createClass( {

    handleClick: function(matchId) {
        // POST para crear acta
        let url = ReportsAPI.postCreateReportAPIUrl(matchId)
        let param = {
            owner: UserAPI.getUser().id,
            issues: "",
            match: matchId
        }
        console.log("create report " , url)
        API.post(url, param, function(err, res) {
            console.log(err, res)
        });
    },

    render: function() {
      var content = <p>Loading...</p>
      if (this.props.list) {
         content = this.props.list.map( match => {
          var onClick;
          if (match.report) {
            onClick = (ev) => {}
          } else {
            onClick = (ev) => this.handleClick(match.id)
          }
            return <ListItem class="list-center"
               primaryText={match.localTeam.teamName + ' - ' + match.visitorTeam.teamName}
               secondaryText={ match.date + ' - ' + match.place }
               leftAvatar={<Avatar src= { match.localAvatarUrl } />}
               rightAvatar={<Avatar src={ match.localAvatarUrl } />}
               href={ReportsAPI.getReportUrl(match.id)}
               onClick={(ev) => this.handleClick(match.id)}
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
