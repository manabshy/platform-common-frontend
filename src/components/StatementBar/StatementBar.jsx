import React from "react"
import PropTypes from "prop-types"

import "./StatementBar.scss"

const StatementBar = ({
    message,
    sectionClassName,
    messageClassName
}) => (
    <section className={`no-data-container ${sectionClassName}`}>
        <h3 className={messageClassName}>{message}</h3>
    </section>
)

StatementBar.propTypes = {
    message: PropTypes.string,
    sectionClassName: PropTypes.string,
    messageClassName: PropTypes.string
}

StatementBar.defaultProps = {
    sectionClassName: ""
}

export default StatementBar