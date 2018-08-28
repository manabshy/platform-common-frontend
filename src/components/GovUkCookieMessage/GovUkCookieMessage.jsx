import React from "react"

import cookieService from "../../services/CookieService"

import "./GovUkCookieMessage.scss"

const cookieKey = "seen_cookie_message"

class GovUkCookieMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: !cookieService.cookie(cookieKey) || props.visible,
      cookieMessage:
        props.cookieMessage ||
        'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>'
    }
  }

  componentDidMount() {
    cookieService.cookie(cookieKey, "yes", { days: 28 })
  }

  componentWillUpdate(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  render() {
    if (!this.state.visible) {
      return null
    }

    return (
      <div id="global-cookie-message" className="CookieMessage">
        <p dangerouslySetInnerHTML={{ __html: this.state.cookieMessage }} />
      </div>
    )
  }
}

export default GovUkCookieMessage
