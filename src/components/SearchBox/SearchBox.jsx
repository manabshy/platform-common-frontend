import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import "./SearchBox.scss"

const SearchBox = ({
  className,
  placeholderText,
  fieldValue,
  onFieldValueChange,
  onFieldSubmit,
  searchButtonClassName,
  searchInputClassName
}) => {
  return (
    <div className={cx("input-group", "pcf-search-box", className)}>
      <input
        className={cx("form-control search-box-input", searchInputClassName)}
        minLength={3}
        type="search"
        name="search-box"
        placeholder={placeholderText}
        value={fieldValue}
        onChange={event => {
          onFieldValueChange(event.target.value)
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            onFieldSubmit(event.target.value)
          }
        }}
      />
      <button
        className={cx("search-box-icon-wrapper", searchButtonClassName)}
        onClick={() => {
          onFieldSubmit(fieldValue)
        }}
      >
        <i className="fa fa-search search-box-icon" />
      </button>
    </div>
  )
}

export default SearchBox

SearchBox.propTypes = {
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  fieldValue: PropTypes.string,
  onFieldValueChange: PropTypes.func.isRequired,
  onFieldSubmit: PropTypes.func.isRequired,
  searchButtonClassName: PropTypes.string,
  searchInputClassName: PropTypes.string,
  searchBoxClassName: PropTypes.string
}

SearchBox.defaultProps = {
  placeholderText: "Search"
}
