import React from 'react';
import mui from 'material-ui';
import ReportActions from '../../actions/report/ReportActions.jsx'

// Components
let Dialog = mui.Dialog,
   DropDownMenu = mui.DropDownMenu,
   TextField = mui.TextField,
   RaisedButton = mui.RaisedButton,
   FlatButton = mui.FlatButton;

let SignReport = React.createClass( {

   handleClick: function() {
      this.refs.signEvent.show()
   },

   _onDialogSubmit: function() {
       let reportId = this.props.reportId
       let type = this.props.type
       let index = this.refs.menu.state.selectedIndex
       let person = this.props.players[index]
       ReportActions.signReport(reportId, type, person.text, (err, res) =>{
           this.refs.signEvent.dismiss()
           window.location.reload()
       })
   },

   render: function() {
       let title = "Firmar" + (this.props.teamName ? " - " + this.props.teamName : "")
      return (
         <div>
            <Dialog ref="signEvent"
             title={title}
             actions={
                 [
                     <FlatButton
                       label="Cancelar"
                       secondary={true}
                       onTouchTap={this.dismissDialog}/>,
                     <FlatButton
                       label="Firmar"
                       primary={true}
                       onTouchTap={this._onDialogSubmit}/>
                 ]
             }
             actionFocus="submit"
             modal={false}>
             <hr/>
             <div>
                <DropDownMenu ref="menu" menuItems={this.props.players} />
             </div>
            </Dialog>
            <RaisedButton label={(this.props.sign!=undefined) ? "Acta firmada" : "Firmar esta acta"}
                style={this.props.style.signButton}
                secondary={true} onClick={this.handleClick} disabled={this.props.sign!=undefined}/>
         </div>
    )
  }
});

module.exports = SignReport
