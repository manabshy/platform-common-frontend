import React from "react"
import PropTypes from "prop-types"
import ReactPaginate from "react-paginate"
import cx from "classnames"

import "./Pagination.scss"

const getPageCount = (totalCount, perPage) => Math.ceil(totalCount / perPage)

const Pagination = ({
  pageNumber,
  onPageChange,
  totalCount,
  perPage,
  pageRangeDisplayed,
  marginPagesDisplayed,
  containerClassName,
  pageClassName,
  activeClassName,
  pageLinkClassName
}) => {
  return totalCount > perPage ? (
    <ReactPaginate
      pageCount={getPageCount(totalCount, perPage)}
      breakLabel={<span>...</span>}
      forcePage={pageNumber * 1 - 1}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      containerClassName={cx("pcf-pagination", containerClassName)}
      pageClassName={cx("pagination-page", pageClassName)}
      activeClassName={cx("active", activeClassName)}
      onPageChange={paginationData => {
        let selected = paginationData.selected
        onPageChange(selected * 1 + 1)
      }}
      pageLinkClassName={cx(pageLinkClassName)}
    />
  ) : null
}

export default Pagination

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  marginPagesDisplayed: PropTypes.number,
  containerClassName: PropTypes.string,
  pageClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  pageLinkClassName: PropTypes.string
}

Pagination.defaultProps = {
  pageNumber: 1,
  perPage: 10,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 2
}
