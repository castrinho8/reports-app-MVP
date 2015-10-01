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
            isCalled: this.props.element.isCalled
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
        ReportActions.toggleCallPlayer(this.props.reportId, this.props.element.player.team, this.props.element.player.id, toggled)
    },

    render: function() {
      return (
         <ListItem
           primaryText={this.props.element.player.user.first_name + ' ' +  this.props.element.player.user.last_name}
           secondaryText={this.props.playerNumber}
           rightToggle={
              <Toggle
                 name={"" + this.props.element.player.playerNumber}
                 onToggle={this._handleToggle}
                 defaultToggled={this.state.isCalled}
                 value={this.props.element.isCalled}/>
           }
           leftAvatar={
              <Avatar src={this.props.element.player.avatarUrl}/>
           }
        />
    )
  }
});

module.exports = PlayerCallItem
