import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./Breadcrumbs.scss"

const Breadcrumbs = ({ trail, links, className }) => (
  <div className="breadcrumbs">
    <ol>
      {trail.map((item, index) => {
        if (links && links[index]) {
          return (
            <li className={className} key={index}>
              <Link to={links[index]}>{item}</Link>
            </li>
          )
        } else {
          return <li key={index}>{item}</li>
        }
      }, this)}
    </ol>
  </div>
)

Breadcrumbs.propTypes = {
  trail: PropTypes.array.isRequired,
  links: PropTypes.array,
  className: PropTypes.string
}

Breadcrumbs.defaultProps = {
  links: []
}

export default Breadcrumbs
