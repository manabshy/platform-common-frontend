import { connect } from "react-redux"
import PlatformNotifications from "../components/PlatformNotifications/PlatformNotifications.jsx"
import {
  fetchNotifications,
  fetchNotification
} from "../actions/PlatformNotifications/index.js"

const mapStateToProps = ({ platformNotifications }) => ({
  platformNotifications
})

const mapDispatchToProps = {
  fetchNotification,
  fetchNotifications
}

const PlatformNotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlatformNotifications)

export default PlatformNotificationsContainer
