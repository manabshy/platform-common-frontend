import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import SignIn from "../SignIn/SignIn.jsx"
import Nav from "../Nav/Nav.jsx"
import logo from "../../static/images/gov.uk_logotype_crown_invert_trans.png"

import "./GovUkHeader.scss"

class GovUkHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    }
  }

  toggleMenu() {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  generateNavigationLinks() {
    let navLinks = [...this.props.navigation]

    if (this.props.allowInvite) {
      navLinks.push({ heading: "Invite Others", to: "/invite" })
    }

    return navLinks
  }

  render() {
    return (
      <header role="banner" id="global-header" className="GovUkHeader">
        <div className="header-wrapper">
          {!this.props.noAuth && (
            <SignIn
              inline={!this.props.navigation}
              display={this.state.displayMenu}
              userData={this.props.userData}
            />
          )}
          <div className="header-global">
            <div className="header-logo">
              <a
                href="https://www.gov.uk"
                title="Go to the GOV.UK homepage"
                id="logo"
                className="content"
              >
                <img src={logo} width="36" height="32" alt="" />
                GOV.UK
              </a>
            </div>
          </div>
          <div
            className={
              this.state.displayMenu
                ? "header-proposition header-padding-bottom-45"
                : "header-proposition"
            }
          >
            <div className="header-link-container">
              <Link className="header-link" to={`/`}>
                {this.props.appName || this.props.title}
              </Link>
              {this.renderNavMenu()}
            </div>
            {this.props.navigation && (
              <Nav
                links={this.generateNavigationLinks()}
                display={this.state.displayMenu}
              />
            )}
          </div>
        </div>
      </header>
    )
  }

  renderNavMenu() {
    const hasAuth = !this.props.noAuth
    const hasNavItems = this.props.navigation && this.props.navigation.length
    const shouldShowMenu = hasNavItems || hasAuth

    return (
      shouldShowMenu && (
        <span
          className={
            this.state.displayMenu
              ? "header-menu-link up"
              : "header-menu-link down"
          }
          onClick={this.toggleMenu.bind(this)}
        >
          Menu
        </span>
      )
    )
  }
}

GovUkHeader.propTypes = {
  appName: PropTypes.string,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.array,
  noAuth: PropTypes.bool,
  allowInvite: PropTypes.bool,
  userData: PropTypes.object
}

GovUkHeader.defaultProps = {
  title: "ACD Service"
}

export default GovUkHeader
