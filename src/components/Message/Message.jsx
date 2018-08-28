import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "./Message.scss"
/**
 * Message
 * Display a message in the UI
 * @class Message
 * @extends {React.Component}
 */
class Message extends React.Component {
  render() {
    return (
      <div
        className={classnames("pcf-message", this.props.classes)}
        role="alert"
        tabindex="-1"
      >
        <h2
          className={classnames(
            "messageHeader heading-medium",
            this.props.headerClasses
          )}
        >
          {this.props.headerText}
        </h2>

        <p>{this.props.messageText}</p>

        {this.props.children}
      </div>
    )
  }
}

Message.propTypes = {
  messageText: PropTypes.string,
  headerText: PropTypes.string,
  classes: PropTypes.string,
  headerClasses: PropTypes.string
}

Message.defaultProps = {
  headerText: "Missing header text",
  messageText: "Missing message text"
}

export default Message
