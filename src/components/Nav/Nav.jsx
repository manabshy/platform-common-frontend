import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import "./Nav.scss"

export default class Nav extends React.Component {
  renderLinks() {
    return this.props.links.map(link => {
      const noop = () => {}

      // Do not render invalid links
      if (!link.to || !link.heading) return

      return (
        <li key={link.heading}>
          <Link onClick={link.onClickHandler || noop} to={link.to}>
            {link.heading}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <nav
        id="proposition-menu"
        className={this.props.display ? "Nav" : "Nav display-none"}
      >
        <ul
          id="proposition-links"
          className={this.props.display ? "show-mobile-menu-links" : ""}
        >
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  display: PropTypes.bool,
  links: PropTypes.array
}

Nav.defaultProps = {
  display: true,
  links: []
}

Nav.propDescriptions = {
  display: "Currently not working as intended - do not use"
}
