import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./DropdownButton.scss"
class DropdownButton extends React.Component {
  constructor() {
    super()
    this.state = {
      showList: false
    }
  }

  toggleList(props) {
    this.setState({
      showList: !this.state.showList
    })
    window.addEventListener("mousedown", this.handleClickOutside.bind(this))
  }

  close() {
    window.removeEventListener("mousedown", this.handleClickOutside.bind(this))
    this.setState({ showList: false })
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      event.target.id != "dropdown-button"
    ) {
      this.close()
    }
  }

  render() {
    return (
      <div
        className={classNames("dropdown", {
          expanded: this.state.showList
        })}
      >
        <button
          id="dropdown-button"
          className="button dropdown-button"
          onClick={this.toggleList.bind(this)}
        >
          {this.props.title}
        </button>
        <div
          className={classNames("dropdown-content", {
            hidden: !this.state.showList
          })}
          id="dropdown-content"
        >
          <ul ref={this.setWrapperRef.bind(this)}>
            {this.props.menu &&
              this.props.menu.map((item, index) => {
                return (
                  <li key={index} onClick={item.handler} className="dropdown-list">
                    {item.content}
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}

DropdownButton.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.PropTypes.any.isRequired,
      handler: PropTypes.func
    })
  ).isRequired
}

DropdownButton.defaultProps = {
  title: "..."
}

export default DropdownButton
