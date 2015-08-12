import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
// Import style
import style from './eventItemStyle';

// Components
let MenuItem = require('material-ui/lib/menus/menu-item');
let IconMenu = mui.IconMenu,
   IconButton = mui.IconButton,
   ListItem = mui.ListItem,
   Dialog = mui.Dialog;

let standardActions = [
  {text: 'Cancel'},
  {text: 'Accept'}
]

let EventItem = React.createClass( {

   handleRemove: function() {
      this.refs.removeEvent.show()
   },

   render: function() {
      return (
         <div>
            <ListItem
               primaryText={
                  <div>
                  <span>({this.props.player.number}) {this.props.player.name}</span>
                  <span> - </span>
                  <span style={style.team}>{ this.props.player.team }</span>
                  </div>
               }
               secondaryText={
                  <div>
                     <span style={style.timestamp}>{this.props.player.timeStamp}</span>
                  </div>
               }
               secondaryTextLines={2}
               leftIcon={<IconButton iconClassName={this.props.player.eventIcon}/>}
               rightIcon={
                  <div>
                     <IconButton iconClassName="fa fa-trash-o" onClick={this.handleRemove}/>
                  </div>
               }>
               <Dialog ref="removeEvent"
                title="Remove event"
                actions={standardActions}
                actionFocus="submit"
                modal="false">
                <p>
                   Are you sure to remove this event?
                </p>
               </Dialog>
            </ListItem>
         </div>
    )
  }
});

module.exports = EventItem
