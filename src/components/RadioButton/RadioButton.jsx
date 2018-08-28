import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid"

import "./RadioButton.scss"

const RadioButton = ({
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
}) => (
  <div className={`pcf-radio-button multiple-choice ${wrapperClassName}`}>
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={event => onChange(event)}
      className={className}
    />
    <label className={labelClassName} htmlFor={id}>
      {label ? <span className={labelTextClassName}>{label}</span> : null}
    </label>
  </div>
)

RadioButton.propTypes = {
  className: PropTypes.string, //ClassName for the input itself
  labelClassName: PropTypes.string, //ClassName to add to the label
  labelTextClassName: PropTypes.string, //ClassName to add to the label text
  wrapperClassName: PropTypes.string, //ClassName to add to the element that wraps the input group
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any
}

RadioButton.defaultProps = {
  checked: false,
  onChange: () => {},
  id: `radio-button-${uuid.v4()}`,
  wrapperClassName: ""
}

export default RadioButton
