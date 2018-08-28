import React from "react"
import PropTypes from "prop-types"

import "./HighlightedBlock.scss"

const HighlightedBlock = ({
  children,
  backgroundColour,
  borderLeftColour,
  blockClassName
}) => (
  <div
    className={`pcf-highlighted-block ${blockClassName}`}
    style={{
      backgroundColor: backgroundColour,
      borderLeft: `10px solid ${borderLeftColour}`
    }}
  >
    {children}
  </div>
)

HighlightedBlock.propTypes = {
  backgroundColor: PropTypes.string,
  borderLeftColour: PropTypes.string,
  blockClassName: PropTypes.string
}

HighlightedBlock.defaultProps = {
  backgroundColour: "#edf7ff",
  borderLeftColour: "#005ea4",
  blockClassName: ""
}

export default HighlightedBlock
