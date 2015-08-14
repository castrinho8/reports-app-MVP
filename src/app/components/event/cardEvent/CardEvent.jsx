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
   { payload: '1', text: 'Falta leve' },
   { payload: '2', text: 'Insulto' },
   { payload: '3', text: 'Agresión' },
   { payload: '4', text: 'Patada sin balón' },
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
             title="Tarjeta amarilla"
             actions={standardActions}
             actionFocus="submit"
             modal={false}>
             <hr/>
             <p>
                ¿Está seguro de añadir una Tarjeta Amarilla a {this.props.player.name} con número {this.props.player.number}?
             </p>
             <p><b>Motivo</b></p>
             <DropDownMenu menuItems={reasonItems} />
             <TextField
               hintText="Selecciona un motivo"
               floatingLabelText="Otro motivo" />
            <div>
              <FlatButton
                 label="Cancelar"
                 secondary={true}
                 linkButton={true}
                 />
              <FlatButton
                 label="Aceptar"
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
