import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = mui.Dialog,
   Avatar = mui.Avatar,
   ListItem = mui.ListItem,
   FlatButton = mui.FlatButton;

let standardActions = []

let GoalEvent = React.createClass( {

   childContextTypes: {
     muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
     return {
       muiTheme: ThemeManager.getCurrentTheme()
     };
   },

   handleClick: function() {
      this.refs.goalEvent.show()
   },

   render: function() {

      return (
         <div>
            <Dialog ref="goalEvent"
             title="Goal"
             actions={standardActions}
             actionFocus="submit"
             modal={false}>
             <hr/>
             <p>
                Are you sure to add a goal to {this.props.player.name} number {this.props.player.number}?
             </p>
             <div>
               <FlatButton
                  label="Cancel"
                  secondary={true}
                  linkButton={true}
                  />
               <FlatButton
                  label="Accept"
                  secondary={true}
                  linkButton={true}
                  href="/report" />
            </div>
            </Dialog>
            <ListItem
               primaryText={ this.props.player.name }
               secondaryText={ this.props.player.number }
               leftAvatar={<Avatar src= { this.props.player.avatarUrl } />} onClick={this.handleClick}/>
         </div>
    )
  }
});

module.exports = GoalEvent
