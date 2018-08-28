import React from "react"
import cx from "classnames"
import ProptTypes from "prop-types"

import "./Badge.scss"

const Badge = ({ className, title, children }) => {
  return (
    <div className={cx("pcf-badge", className)} title={title}>
      {children}
    </div>
  )
}

export default Badge

Badge.propTypes = {
  className: ProptTypes.string,
  title: ProptTypes.string
}
