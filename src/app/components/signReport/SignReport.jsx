import React from 'react';
import mui from 'material-ui';

// Components
let Dialog = mui.Dialog,
   DropDownMenu = mui.DropDownMenu,
   TextField = mui.TextField,
   RaisedButton = mui.RaisedButton;

let standardActions = [
  {text: 'Cancelar'},
  {text: 'Firmar'}
]

let SignReport = React.createClass( {

   handleClick: function() {
      this.refs.signEvent.show()
   },

   render: function() {

      return (
         <div>
            <Dialog ref="signEvent"
             title="Firmar"
             actions={standardActions}
             actionFocus="submit"
             modal={false}>
             <hr/>
             <div>
                <DropDownMenu menuItems={this.props.players} />
                <TextField
                   floatingLabelText="Clave"
                   hintText="Escriba su clave"
                   type="password" />
             </div>
            </Dialog>
            <RaisedButton label="Firmar" style={this.props.style.signButton}
               secondary={true} onClick={this.handleClick}/>
         </div>
    )
  }
});

module.exports = SignReport
