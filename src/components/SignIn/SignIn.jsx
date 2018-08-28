import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { getHttpJSON } from "../../helpers/http/Http"
import KEYS from "../../helpers/auth/AuthKeynames"

import "./SignIn.scss"
export default class SignIn extends React.Component {
  getURL(location) {
    let url = location
    window.location = url
  }

  getUserData() {
    let userData
    if (this.props.userData) {
      userData = this.props.userData
    } else {
      userData = getHttpJSON(KEYS.USER_DATA)
    }
    return userData
  }

  renderLogin() {
    let userData = this.getUserData()

    if (userData && userData.userInfo) {
      return (
        <div className={cx("details", { "inline-details": this.props.inline })}>
          <span id="email">{userData.userInfo.email}</span>
          <a
            className="sign-link out"
            onClick={this.getURL.bind(this, "/sign-out")}
          >
            Sign out
          </a>
        </div>
      )
    } else {
      return (
        <div className={cx("details", { "inline-details": this.props.inline })}>
          <a onClick={this.getURL.bind(this, "/sign-in")} className="sign-link">
            Register
          </a>
          <a
            onClick={this.getURL.bind(this, "/sign-in")}
            className="sign-link out"
          >
            Sign in
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={this.props.display ? "login" : "display-none login"}>
        {this.renderLogin()}
      </div>
    )
  }
}

SignIn.propTypes = {
  display: PropTypes.bool,
  inline: PropTypes.bool,
  userData: PropTypes.object
}
