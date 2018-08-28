import { connect } from "react-redux"
import Notifications from "../components/Notifications/Notifications.jsx"

const mapStateToProps = state => {
  return { notifications: state.notifications }
}

const NotificationsContainer = connect(mapStateToProps)(Notifications)

export default NotificationsContainer
