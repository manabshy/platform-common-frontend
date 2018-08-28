import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./Spinner.scss"

class Spinner extends React.Component {
  renderSpinner() {
    const style = {}
    const includeWrapper = this.props.includeWrapper

    let className = includeWrapper ? "spinner" : "Spinner spinner"

    if (!includeWrapper) {
      style.fontSize = this.props.size
      className = classNames(className, this.props.className)
    }
    return <span className={className} style={style} />
  }

  renderWrapper() {
    const style = {
      fontSize: this.props.size
    }
    return (
      <div
        className={classNames(this.props.className, "Spinner SpinnerWrapper")}
        style={style}
      >
        <span className="loading-text">{this.props.wrapperText}</span>
        {this.renderSpinner()}
      </div>
    )
  }

  render() {
    return this.props.includeWrapper
      ? this.renderWrapper()
      : this.renderSpinner()
  }
}

Spinner.propTypes = {
  includeWrapper: PropTypes.bool,
  size: PropTypes.string,
  wrapperText: PropTypes.string
}

Spinner.defaultProps = {
  includeWrapper: true,
  size: "1em",
  wrapperText: "Loading data..."
}

export default Spinner
