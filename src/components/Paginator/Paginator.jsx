import React from "react"
import PropTypes from "prop-types"

import "./Paginator.scss"

class Paginator extends React.Component {
  firePageChange(newPage) {
    this.props.onPageChange(newPage)
  }

  previous() {
    if (this.props.offset <= 0) {
      return
    }

    this.firePageChange(this.props.offset - 1)
  }

  next() {
    if (this.props.offset >= this.props.count - 1) {
      return
    }

    this.firePageChange(this.props.offset + 1)
  }

  renderPreviousPage() {
    if (this.props.offset <= 0) {
      return
    }
    return (
      <div className="previousPage" onClick={this.previous.bind(this)}>
        <div className="wrapper">
          <i
            className="fa fa-angle-left  paginator-control"
            disabled={this.props.offset <= 0}
            aria-hidden="true"
          />
          <span>
            Previous
            <div className="page-count">
              {this.props.offset} of {this.props.count}
            </div>
          </span>
        </div>
      </div>
    )
  }

  renderNextPage() {
    if (isNaN(this.props.count) || this.props.offset >= this.props.count - 1) {
      return
    }
    return (
      <div className="nextPage" onClick={this.next.bind(this)}>
        <div className="wrapper">
          <span>
            Next
            <div className="page-count">
              {this.props.offset + 2} of {this.props.count}
            </div>
          </span>
          <i
            className="fa fa-angle-right paginator-control"
            disabled={this.props.offset >= this.props.count - 1}
            aria-hidden="true"
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="paginator-container">
        {this.renderPreviousPage()}
        {this.renderNextPage()}
      </div>
    )
  }
}

Paginator.propTypes = {
  offset: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func
}

Paginator.defaultProps = {
  onPageChange: () => undefined
}

export default Paginator
