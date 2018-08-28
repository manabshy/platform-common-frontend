import React from "react"
import PropTypes from "prop-types"
import NCSCLogoPNG from "../../static/images/ncsc-logo.png"

/**
 * [NCSC Logo]
 */
const NCSCLogo = () => {
  return (
    <div className="lead-logo">
      <img alt="NCSC" src={NCSCLogoPNG} />
    </div>
  )
}

NCSCLogo.propTypes = {
  children: PropTypes.string
}

NCSCLogo.defaultProps = {}

export default NCSCLogo
