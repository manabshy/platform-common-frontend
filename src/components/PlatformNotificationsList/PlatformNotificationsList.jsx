import React, { Component } from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import Spinner from "../Spinner/Spinner"
import InformationModal from "../InformationModal/InformationModal"
import remark from "remark"
import moment from "moment"
import reactRenderer from "remark-react"

import "./PlatformNotificationsList.scss"
/**
 * Platform Notification List
 *
 * Display a list of notifications from the platform service
 *
 * @export
 * @class PlatformNotificationList
 * @extends {Component}
 */
export default class PlatformNotificationList extends Component {
  constructor(props) {
    super(props)

    // Local state
    this.state = {
      showNotification: false
    }

    // Bind to scope
    this.onNotificationClickHandler = this.onNotificationClickHandler.bind(this)
  }

  updateNotificationSubject(subject) {
    this.setState({
      notificationSubject: subject
    })
  }

  updateNotificationContent(content) {
    this.setState({
      notificationContent: content
    })
  }

  updateNotificationModal(status) {
    this.setState({
      showNotification: !!status
    })
  }

  onNotificationClickHandler(e, noteID) {
    e.preventDefault()
    // open the modal
    this.updateNotificationModal(true)
    // GET the notification and open the modal
    this.props.fetchNotification(noteID)
  }

  generateHeaders() {
    return (
      <tr>
        <th key="subject">Subject</th>
        <th key="service" className="content-right">
          Service
        </th>
        <th className="note-date content-right" key="date">
          Created
        </th>
      </tr>
    )
  }

  generateShortDate(d) {
    // If today then how time HH:mm am/pm
    let momentDate = new moment(d)
    if (momentDate.isSame(new Date(), "day")) {
      return momentDate.format("HH:mm")
    }
    // if same year show MM DD
    else if (momentDate.isSame(new Date(), "year")) {
      return momentDate.format("DD MMMM YYYY HH:mm")
    }
    // if different year then dd/mm/yy
    else {
      return momentDate.format("DD MMMM YYYY HH:mm")
    }
  }

  generateRows() {
    if (this.props.data && this.props.data.length) {
      return this.props.data.map(note => {
        const notificationClass = cx("notification", {
          read: note.read,
          unread: !note.read
        })

        return (
          <tr className={notificationClass} key={"notification-" + note.id}>
            <td className="notification-list-item-subject">
              <a
                href="#"
                onClick={e => this.onNotificationClickHandler(e, note.id)}
              >
                {note.subject}
              </a>
            </td>
            <td className="notification-service-item-name content-right">
              {note.service}
            </td>
            <td className="note-date content-right">
              {this.generateShortDate(note.created)}
            </td>
          </tr>
        )
      })
    } else {
      return (
        <tr id="no-data-message" key={"no-notifications"}>
          <td colSpan={3}>No notifications found</td>
        </tr>
      )
    }
  }

  getNotificationModalHeader() {
    return !this.props.targetNotification.isFetching &&
      this.props.targetNotification.data
      ? this.props.targetNotification.data.subject
      : `Loading Notification...`
  }

  renderData(data) {
    // Custom Link to open in a new tab instead of default
    const NotificationRichContentLink = props => {
      return (
        <a rel="noreferrer" target="_blank" {...props}>
          {props.children}
        </a>
      )
    }

    return (
      <div className="notification-content-container">
        <div className="panel">
          <div className="notification-service">
            <label>Service:</label> {data.service}
          </div>
          <div className="notification-date">
            <label>Created:</label> {this.generateShortDate(data.created)}
          </div>
          <div className={`notification-priority`}>
            <label>Priority:</label>{" "}
            <span className={`notification-priority-tag`}>{data.priority}</span>
          </div>
        </div>
        <div className="notification-content-text">
          {
            remark()
              .use(reactRenderer, {
                remarkReactComponents: {
                  a: NotificationRichContentLink
                }
              })
              .processSync(data.content).contents
          }
        </div>
      </div>
    )
  }

  getNotificationModalContent() {
    return !this.props.targetNotification.isFetching &&
      this.props.targetNotification.data ? (
      this.renderData(this.props.targetNotification.data)
    ) : (
      <Spinner />
    )
  }

  render() {
    return (
      <div
        className={cx("notifications-list", this.props.className)}
        style={this.props.customStyles}
      >
        <InformationModal
          modalBodyID="notification-modal"
          isOpen={this.state.showNotification}
          onCloseModal={() => this.updateNotificationModal(false)}
          header={this.getNotificationModalHeader()}
          content={this.getNotificationModalContent()}
        />
        <table className="notifications-list-table">
          <thead>{this.generateHeaders()}</thead>
          <tbody>{this.generateRows()}</tbody>
        </table>
      </div>
    )
  }
}

PlatformNotificationList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  customStyles: PropTypes.object,
  fetchNotification: PropTypes.func,
  targetNotification: PropTypes.object
}

PlatformNotificationList.defaultProps = {
  className: "",
  data: [],
  customStyles: {},
  targetNotification: {}
}
