import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid"
import classNames from "classnames"

import "./Box.scss"

class Box extends React.Component {
  constructor() {
    super()
    this.id = `box-${uuid.v4()}`
  }

  render() {
    return (
      <div className={classNames("pcf-box")}>
        <div className="box-header">
          <h3 className="heading-small">{this.props.header}</h3>
        </div>
        <div className="box-content">{this.props.content}</div>
      </div>
    )
  }
}

Box.propTypes = {
  header: PropTypes.any,
  content: PropTypes.any
}

Box.defaultProps = {
  header: ""
}

export default Box
