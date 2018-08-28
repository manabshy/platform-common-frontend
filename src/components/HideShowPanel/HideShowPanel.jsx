import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./HideShowPanel.scss"

class HideShowPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      showContent: false
    }
  }

  toggleContent() {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  open() {
    this.setState({ showContent: true })
  }

  close() {
    this.setState({ showContent: false })
  }

  render() {
    return (
      <div
        className={classNames("HideShowPanel", this.props.className, {
          expanded: this.state.showContent
        })}
      >
        <div className="panel-heading" onClick={this.toggleContent.bind(this)}>
          <h2 className={classNames(this.props.headingClass)} tabIndex="0">
            <i className="fa fa-chevron-right expand-icon" aria-hidden="true" />
            {this.props.heading}
          </h2>
        </div>
        <div
          className={classNames("panel-content", {
            hidden: !this.state.showContent
          })}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

HideShowPanel.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  headingClass: PropTypes.string
}

HideShowPanel.defaultProps = {
  headingClass: "heading-medium"
}

export default HideShowPanel
