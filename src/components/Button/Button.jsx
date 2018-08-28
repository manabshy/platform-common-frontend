import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./Button.scss"

const Button = ({ className = "", disabled = false, onClick, children }) => (
  <button
    onClick={event => {
      onClick(event)
    }}
    className={classNames("button", "button--normalised", className)}
    aria-disabled={disabled}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  disabled: false
}
