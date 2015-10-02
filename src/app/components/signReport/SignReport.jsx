import React from 'react';
import Reflux from 'reflux';
import mui from 'material-ui';
import ReportActions from '../../actions/report/ReportActions.jsx'
import EventActions from '../../actions/event/EventActions.jsx'
import SignStore from '../../stores/signStore/SignStore.jsx'

// Components
let Dialog = mui.Dialog,
   DropDownMenu = mui.DropDownMenu,
   TextField = mui.TextField,
   RaisedButton = mui.RaisedButton,
   FlatButton = mui.FlatButton;

let SignReport = React.createClass( {
    mixins: [Reflux.connect(SignStore, "sign")],

   dismissDialog: function() {
       this.refs.signEvent.dismiss()
   },

   handleClick: function() {
      this.refs.signEvent.show()
   },

   getInitialState: function() {
      return { 'signed': false }
   },

   _onDialogSubmit: function() {
       let reportId = this.props.reportId
       console.log(
        this.refs.menu.props.menuItems,
        this.refs.menu.state.selectedIndex)

       let signerId = this.refs.menu.props.menuItems[this.refs.menu.state.selectedIndex].id

       ReportActions.signReport(reportId, signerId, (ev) => {
              this.refs.signEvent.dismiss()
              this.setState({'signed': true})
       })
  },

   render: function() {
      var self = this;
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
                       onTouchTap={self.dismissDialog}/>,
                     <FlatButton
                       label="Firmar"
                       primary={true}
                       onTouchTap={self._onDialogSubmit}/>
                 ]
             }
             actionFocus="submit"
             modal={false}>
             <hr/>
             <div>
                <DropDownMenu ref="menu" menuItems={this.props.players} />
             </div>
            </Dialog>
            <RaisedButton label={(this.state.signed) ? "Acta firmada" : "Firmar esta acta"}
                style={this.props.style.signButton}
                secondary={true} onClick={this.handleClick} disabled={this.state.signed}/>
         </div>
    )
  }
});

module.exports = SignReport
