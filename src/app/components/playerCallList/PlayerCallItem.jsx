import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import ReportActions from '../../actions/report/ReportActions.jsx'
import PlayerCallStore from '../../stores/playerCallList/PlayerCallStore.jsx'

// Components
let ListItem = mui.ListItem,
   Toggle = mui.Toggle,
   Avatar = mui.Avatar;
let ThemeManager = new mui.Styles.ThemeManager();

let PlayerCallItem = React.createClass( {

    getInitialState: function() {
        return {
            isCalled: this.props.player.isCalled
        }
    },

    childContextTypes: {
      muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },

    _handleToggle: function(event, toggled) {
        this.setState({isCalled: toggled})
        ReportActions.toggleCallPlayer(this.props.reportId, this.props.player.teamId, this.props.player.id, toggled)
    },

    render: function() {
      return (
         <ListItem
           primaryText={this.props.player.name}
           secondaryText={this.props.player.number}
           rightToggle={
              <Toggle
                 name={"" + this.props.player.number}
                 onToggle={this._handleToggle}
                 defaultToggled={this.state.isCalled}
                 value={this.props.player.isCalled}/>
           }
           leftAvatar={
              <Avatar src={this.props.player.avatarUrl}/>
           }
        />
    )
  }
});

module.exports = PlayerCallItem
