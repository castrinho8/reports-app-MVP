import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';

// Components
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = mui.Dialog,
   Avatar = mui.Avatar,
   ListItem = mui.ListItem,
   DropDownMenu = mui.DropDownMenu,
   TextField = mui.TextField,
   FlatButton = mui.FlatButton;

let standardActions = []

let reasonItems = [
   { payload: '1', text: 'Soft foul' },
   { payload: '2', text: 'Insult' },
   { payload: '3', text: 'Aggression' },
   { payload: '4', text: 'Kick without the ball' },
]

let CardEvent = React.createClass( {

   childContextTypes: {
     muiTheme: React.PropTypes.object
   },

   getChildContext: function() {
     return {
       muiTheme: ThemeManager.getCurrentTheme()
     };
   },

   handleClick: function() {
      this.refs.cardEvent.show()
   },

   render: function() {

      return (
         <div>
            <Dialog ref="cardEvent"
             title="Yellow Card"
             actions={standardActions}
             actionFocus="submit"
             modal={false}>
             <hr/>
             <p>
                Are you sure to add a Yellow Card to {this.props.player.name} number {this.props.player.number}?
             </p>
             <p><b>Select reason</b></p>
             <DropDownMenu menuItems={reasonItems} />
             <TextField
               hintText="Write a new reason"
               floatingLabelText="Other reason" />
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

module.exports = CardEvent
