import React from "react"
import Modal from "react-modal"
import GDSTextInput from "../GDSInput/GDSInput.jsx"

const INITIAL_STATE = {
  isInvitationCopiedToInviter: false
}

export default class CreateGroupModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.onRequestCloseHandler = this.onRequestCloseHandler.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this._fieldIsInvalid = this._fieldIsInvalid.bind(this)
    this._getFieldErrorMessage = this._getFieldErrorMessage.bind(this)
    this.onCCChange = this.onCCChange.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onInviteUser(
      "" + this.email.getValue().trim(),
      this.state.isInvitationCopiedToInviter
    )
  }

  onCCChange(event) {
    let checked = event.target.checked
    // Let's ensure we persist the state...
    this.setState((prevState, props) => ({
      isInvitationCopiedToInviter: checked
    }))
  }

  /**
   * Ensuring when modal re-opened later, any earlier checked checkbox is unchecked
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (!nextProps.isOpen) {
      this.setState(INITIAL_STATE)
    }
  }

  onRequestCloseHandler(e) {
    e.preventDefault()
    this.props.onRequestClose()
  }

  render() {
    return (
      <div>
        <Modal
          className="modalClass invite-user-modal"
          overlayClassName="OverlayClass"
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
          shouldCloseOnOverlayClick={false}
          contentLabel="Modal"
        >
          <div className="modal-body">
            <div className="heading-medium">
              Invite others to use the service
            </div>
            <p className="panel panel-border-wide">
              To invite others you will need to enter their email address to
              send them an invitation.
            </p>

            <GDSTextInput
              invalid={this._fieldIsInvalid("email")}
              errorMessage={this._getFieldErrorMessage("email")}
              labelText={"Enter email address"}
              maxLength={200}
              ref={input => (this.email = input)}
              autoFocus
            />

            <label>
              <input
                id="cc-invitation-checkbox"
                type="checkbox"
                name="cc"
                checked={this.state.isInvitationCopiedToInviter}
                aria-label="Do you want to recieve a copy of the email invitation?"
                onChange={this.onCCChange}
              />{" "}
              Do you want to recieve a copy of the email invitation?
            </label>

            <div className="modal-buttons">
              <a
                href="#"
                id="close-invitation-button"
                className="close-modal"
                onClick={this.onRequestCloseHandler}
              >
                Close
              </a>
              <button
                id="send-invitation-button"
                className="button close-modal"
                onClick={this.onSubmit}
                disabled={this.props.sendingInvite ? "disabled" : ""}
                type="submit"
              >
                Send invitation
              </button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }

  _getFieldErrorMessage(fieldName) {
    if (
      typeof this.props.errors === "object" &&
      typeof this.props.errors[fieldName] === "string"
    ) {
      return this.props.errors[fieldName]
    } else {
      return null
    }
  }

  _fieldIsInvalid(fieldName) {
    return this._getFieldErrorMessage(fieldName)
  }
}
