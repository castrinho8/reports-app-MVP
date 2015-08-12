import React from 'react';
import mui from 'material-ui';

// Components
let ListItem = mui.ListItem,
   Toggle = mui.Toggle,
   Avatar = mui.Avatar;

let PlayerCallItem = React.createClass( {

   render: function() {
      return (
         <ListItem
           primaryText={this.props.player.name}
           secondaryText={this.props.player.number}
           rightToggle={
              <Toggle
                 name={this.props.player.number}
                 value="true"/>
           }
           leftAvatar={
              <Avatar src={this.props.player.avatarUrl}/>
           }
        />
    )
  }
});

module.exports = PlayerCallItem
