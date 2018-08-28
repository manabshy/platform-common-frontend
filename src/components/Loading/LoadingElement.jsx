import React, { Component } from "react"
import PropTypes from "prop-types"

import "./LoadingElement.scss"

export default class LoadingElement extends Component {
  render() {
    switch (this.props.type) {
      case "text":
        return <span className="loading-element-text animated-background" />
      case "button":
        return <span className="loading-element-button animated-background" />
      case "paragraph":
        return (
          <div>
            <span className="loading-element-paragraph animated-background" />
            <span className="loading-element-text animated-background" />
            <span className="loading-element-text animated-background" />
          </div>
        )
      default:
        return <span className="loading-text animated-background" />
    }
  }
}

LoadingElement.propTypes = {
  type: PropTypes.string
}

LoadingElement.defaultProps = {
  type: "text"
}
