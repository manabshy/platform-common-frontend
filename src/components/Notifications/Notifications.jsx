import React from "react"
import Notifications from "react-notification-system-redux"
import { style } from "../../modules/notificationsConfig"
/**
 * Notification Component
 * Add this component (outside of routes) to display notifications globally
 * @prop notifications {Array}
 * @prop customStyle {Object}
 * @export
 * @class Notification
 * @extends {React.Component}
 */
export default class Notification extends React.Component {
  render() {
    const notificationStyle = this.props.customStyle
      ? this.props.customStyle
      : style

    return (
      <Notifications
        notifications={this.props.notifications}
        style={notificationStyle}
      />
    )
  }
}
