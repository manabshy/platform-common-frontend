import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid"
import classNames from "classnames"

import "./List.scss"

class List extends React.Component {
  constructor() {
    super()
    this.id = `List-${uuid.v4()}`
  }

  render() {
    return (
      <ul className={classNames("pcList")}>
        {this.props.items &&
          this.props.items.map(i => {
            return <li key={`list-item-${uuid.v4()}`}>{i}</li>
          })}
      </ul>
    )
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
}

List.defaultProps = {
  items: []
}

export default List
