import React from 'react';
import mui from 'material-ui';

// Components
let Dialog = mui.Dialog,
   DropDownMenu = mui.DropDownMenu,
   TextField = mui.TextField,
   RaisedButton = mui.RaisedButton;

let standardActions = [
  {text: 'Cancel'},
  {text: 'Sign'}
]

let SignReport = React.createClass( {

   handleClick: function() {
      this.refs.signEvent.show()
   },

   render: function() {

      return (
         <div>
            <Dialog ref="signEvent"
             title="Sign"
             actions={standardActions}
             actionFocus="submit"
             modal={false}>
             <hr/>
             <div>
                <DropDownMenu menuItems={this.props.players} />
                <TextField
                   floatingLabelText="Key"
                   hintText="Write your key"
                   type="password" />
             </div>
            </Dialog>
            <RaisedButton label="Sign this report" style={this.props.style.signButton}
               secondary={true} onClick={this.handleClick}/>
         </div>
    )
  }
});

module.exports = SignReport
