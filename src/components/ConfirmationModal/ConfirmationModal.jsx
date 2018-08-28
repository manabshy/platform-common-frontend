import React from "react"
import Modal from "react-modal"
import classNames from "classnames"

import "./ConfirmationModal.scss"

export default class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: props.isOpen || false
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isOpen !== this.state.showModal) {
      this.setState({
        showModal: nextProps.isOpen
      })
    }
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  onSubmit() {
    this.props.onSubmitModal()
    this.handleCloseModal()
  }

  render() {
    return (
      <div style={{ display: this.props.handleDisplay || "inline" }}>
        {this.props.handle &&
          (!this.props.handleAsLink ? (
            <button
              onClick={this.handleOpenModal.bind(this)}
              className={classNames(
                "confirmationHandle",
                this.props.handleClass
              )}
            >
              {this.props.handle}
            </button>
          ) : (
            <a
              onClick={this.handleOpenModal.bind(this)}
              className={classNames(
                "confirmationHandle",
                this.props.handleClass
              )}
            >
              {this.props.handle}
            </a>
          ))}
        <Modal
          ariaHideApp={false}
          className="modalClass"
          overlayClassName="OverlayClass"
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal.bind(this)}
          contentLabel="Confirmation Modal"
          shouldCloseOnOverlayClick={false}
        >
          <div className="modal-body ">
            <a
              href="#"
              className="close-modal close-button"
              onClick={e => {
                e.preventDefault()
                this.handleCloseModal()
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </a>
            <div className="heading-medium wraptd">
              {this.props.messageHeader}
            </div>
            <div className="wraptd">
              <p>{this.props.message}</p>
            </div>
            <div className="modal-buttons">
              <button
                className="button close-modal confirm"
                onClick={this.onSubmit.bind(this)}
              >
                {this.props.submit}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
