import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid"
import classNames from "classnames"

import "./Checkbox.scss"

const Checkbox = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  labelClassName,
  wrapperClassName,
  labelTextClassName,
  className
}) => {
  return (
    <div
      className={classNames(
        "pcf-checkbox",
        "input-group",
        "input-group-checkbox",
        wrapperClassName
      )}
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={event => {
          onChange(event)
        }}
        className={classNames("checkbox-input", className)}
      />
      <label
        className={classNames(
          "checkbox-label",
          {
            checked: checked
          },
          labelClassName
        )}
        htmlFor={id}
      >
        {label ? <span className={labelTextClassName}>{label}</span> : null}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string, // ClassName for the input itself
  labelClassName: PropTypes.string, // ClassName to add to the label
  labelTextClassName: PropTypes.string, // ClassName to add to the label text
  wrapperClassName: PropTypes.string, // ClassName to add to the element that wraps the input group
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string, // This defaults to a very unique id, while hte prop allows override for it
  name: PropTypes.string,
  value: PropTypes.any
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  className: "",
  labelClassName: "",
  id: `Checkbox-${uuid.v4()}`
}

export default Checkbox
