import React, { Component } from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Spinner from "../Spinner/Spinner"
import PlatformNotificatonsList from "../PlatformNotificationsList/PlatformNotificationsList"
import NCSCLogo from "../NCSCLogo/NCSCLogo"
import Box from "../Box/Box"
import List from "../List/List"
import "./PlatformNotifications.scss"
/******************************************************************************************************/
// Local Helpers
/******************************************************************************************************/
const mainHeading = "Notifications"
/**
 * Platform Notification
 *
 * @export
 * @class PlatformNotification
 * @extends {Component}
 */
export default class PlatformNotifications extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: {
        service: []
      }
    }
  }

  // Fetch notifications on mount to populate the list
  componentDidMount() {
    // Load the notifications from the api
    this.props.fetchNotifications()
  }
  /**
   * Set Service Filter
   *
   * @param {string} service
   * @memberof PlatformNotification
   */
  setServiceFilter(service) {
    this.setState({
      filter: {
        ...this.state.filter,
        service: this.state.filter.service.filter(s => s === service).length
          ? this.state.filter.service.filter(s => s !== service)
          : [...this.state.filter.service, service]
      }
    })
  }
  /**
   * Render List Filter
   *
   * Counts the number of unique services then returns a list in a box with a filter per unique service (with count)
   *
   * @returns  <Box>
   * @memberof PlatformNotification
   */
  renderListFilter() {
    const serviceCount = this.props.platformNotifications.data.reduce(
      (coll, curr) => {
        // Get the service
        let s = curr.service
        let unread = curr.read

        // Does it exist?
        if (s in coll) {
          // is the note unread?
          if (!unread) coll[s]++
        } else {
          coll[s] = !unread ? 1 : 0
        }

        return coll
      },
      {}
    )

    const serviceFilterHandler = (e, s) => {
      e.preventDefault()
      this.setServiceFilter(s)
    }

    const safeServiceName = s => s.replace(" ", "-").toLowerCase()

    const getServiceCount = s => {
      return serviceCount[s] === 0 ? `${s}` : `${s} (${serviceCount[s]})`
    }

    const list = Object.keys(serviceCount)
      .sort()
      .map(s => {
        return (
          <div
            className="notification-filter-item"
            onClick={e => serviceFilterHandler(e, s)}
          >
            <input
              id={`${safeServiceName(s)}`}
              name={safeServiceName(s)}
              type="checkbox"
              defaultChecked={
                this.state.filter.service.filter(f => f === s).length
              }
              value={s}
            />
            <label
              htmlFor="nationality-1"
              className={cx("notification-filter", {
                "unread-filter": serviceCount[s]
              })}
            >
              <span title={s} className="service-filter-name">
                {getServiceCount(s)}
              </span>
            </label>
          </div>
        )
      })

    const listWrapper = <List items={list} />

    const clearFilterHandler = e => {
      e.preventDefault()
      this.setState({
        filter: {
          ...this.state.filter,
          service: []
        }
      })
    }

    return (
      <Box
        header={
          <span>
            Services{" "}
            <a
              href="#"
              onClick={clearFilterHandler}
              className="clear-filter pull-right"
            >
              clear all
            </a>
          </span>
        }
        content={listWrapper}
      />
    )
  }

  /**
   * Apply Filter
   *
   * @param {*} data
   * @returns
   * @memberof PlatformNotification
   */
  applyFilter(data) {
    return this.state.filter.service.length
      ? data.filter(
          d => this.state.filter.service.filter(s => s === d.service).length > 0
        )
      : data
  }

  /**
   * Render the Filter and List
   *
   * This layout is used when there are filters to display
   *
   * @returns
   * @memberof PlatformNotification
   */
  renderFilterAndList() {
    return (
      <div className="grid-row">
        <div className="column-one-quarter">{this.renderListFilter()}</div>
        <div className="column-three-quarters">
          <PlatformNotificatonsList
            fetchNotification={this.props.fetchNotification}
            targetNotification={
              this.props.platformNotifications.targetNotification
            }
            data={this.applyFilter(this.props.platformNotifications.data)}
          />
        </div>
      </div>
    )
  }

  /**
   * Render only the List
   *
   * This layout is used when there are no filters to display
   *
   * @returns
   * @memberof PlatformNotification
   */
  renderListOnly() {
    return (
      <div className="grid-row">
        <div className="column-three-quarters">
          <PlatformNotificatonsList
            fetchNotification={this.props.fetchNotification}
            targetNotification={
              this.props.platformNotifications.targetNotification
            }
            data={this.applyFilter(this.props.platformNotifications.data)}
          />
        </div>
      </div>
    )
  }

  /**
   * Render Platform Notifications List
   *
   * @returns
   * @memberof PlatformNotification
   */
  renderPlatformNotificationsList() {
    return (
      <div className="notifications-container">
        {this.props.platformNotifications.isFetching ? (
          <Spinner />
        ) : !this.props.platformNotifications.data.length ? (
          this.renderListOnly()
        ) : (
          this.renderFilterAndList()
        )}
      </div>
    )
  }

  getUnreadCount() {
    return `(${
      this.props.platformNotifications.data.filter(s => !s.read).length
    })`
  }

  render() {
    return (
      <div>
        <NCSCLogo />
        <div>
          <h1 id="lead-heading" className="heading-xlarge">
            {mainHeading} {this.getUnreadCount()}
          </h1>
        </div>
        {this.renderPlatformNotificationsList()}
      </div>
    )
  }
}

PlatformNotifications.propTypes = {
  platformNotifications: PropTypes.object.isRequired,
  fetchNotifications: PropTypes.func
}

PlatformNotifications.defaultProps = {
  fetchNotifications: () => undefined
}
