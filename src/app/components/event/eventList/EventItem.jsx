import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import EventActions from '../../../actions/event/EventActions';

// Import style
import style from './eventItemStyle';

// Components
let MenuItem = require('material-ui/lib/menus/menu-item');
let IconMenu = mui.IconMenu,
   IconButton = mui.IconButton,
   ListItem = mui.ListItem,
   Dialog = mui.Dialog,
   FlatButton = mui.FlatButton;

let EventItem = React.createClass( {

    dismissDialog: function() {
        this.refs.removeEvent.dismiss()
    },

    onDialogSubmit: function() {
        EventActions.deleteEvent(this.props.player.id)
        window.location.reload()
    },

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
                  <span style={style.team}>{ this.props.player.teamName }</span>
                  </div>
               }
               secondaryText={
                  <div>
                     <span style={style.timestamp}>{this.props.player.type}</span>
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
                title="Eliminar evento"
                actions={
                    [
                        <FlatButton
                          label="Cancelar"
                          secondary={true}
                          onTouchTap={this.dismissDialog}/>,
                        <FlatButton
                          label="Aceptar"
                          primary={true}
                          onTouchTap={this.onDialogSubmit}/>
                    ]
                }
                actionFocus="submit"
                modal={false}>
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
