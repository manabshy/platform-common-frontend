import React from "react"
import Modal from "react-modal"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./InformationModal.scss"

export default class InformationModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: props.isOpen || false
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isOpen !== this.state.showModal)
      this.handleUpdateModal(nextProps.isOpen)
  }

  handleUpdateModal(newState) {
    this.setState({ showModal: !!newState })
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
    if (this.props.onCloseModal) {
      this.props.onCloseModal()
    }
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
                "modal-visibility-handle",
                this.props.handleClass
              )}
            >
              {this.props.handle}
            </button>
          ) : (
            <a
              onClick={this.handleOpenModal.bind(this)}
              className={classNames(
                "modal-visibility-handle",
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
          <div id={this.props.modalBodyID} className="modal-body ">
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
            <div className="heading-medium wraptd">{this.props.header}</div>
            <div className="wraptd">{this.props.content}</div>
          </div>
        </Modal>
      </div>
    )
  }
}

InformationModal.propTypes = {
  modalBodyID: PropTypes.string,
  isOpen: PropTypes.bool,
  header: PropTypes.string,
  content: PropTypes.any,
  onCloseModal: PropTypes.func
}

InformationModal.defaultProps = {
  header: "Information"
}
