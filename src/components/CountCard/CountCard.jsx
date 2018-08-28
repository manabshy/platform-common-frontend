import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./CountCard.scss"

const CountCard = ({
  to,
  value,
  numberTextColour,
  labelTextColour,
  backgroundColour,
  text,
  total,
  wrapperClassName,
  linkClassName,
  inputClassName,
  largeNumberClassName,
  labelClassName,
  onChangeHandler
}) => {
  const renderWithWrapper = () => {
    return (
      <Link
        className={linkClassName}
        to={to}
        style={{ textDecoration: "none" }}
      >
        {renderContent()}{" "}
      </Link>
    )
  }

  const renderContent = () => {
    return (
      <div>
        <input
          className={inputClassName}
          type="radio"
          value={value}
          name="severity"
          autoComplete="off"
          id={text}
          onChange={onChangeHandler}
        />
        <label htmlFor={text}>
          <span
            className={`large-number ${largeNumberClassName}`}
            style={{
              color: numberTextColour ? numberTextColour : backgroundColour
            }}
          >
            {total}
          </span>
          <span
            className={`label ${labelClassName}`}
            style={{
              background: backgroundColour,
              borderColor: backgroundColour,
              color: labelTextColour
            }}
          >
            {text}
          </span>
        </label>
      </div>
    )
  }

  return (
    <div className={`count-card ${wrapperClassName}`}>
      {to ? renderWithWrapper() : renderContent()}
    </div>
  )
}

CountCard.propTypes = {
  to: PropTypes.string,
  value: PropTypes.string,
  numberTextColour: PropTypes.string,
  labelTextColour: PropTypes.string,
  backgroundColour: PropTypes.string,
  text: PropTypes.string.isRequired,
  total: PropTypes.any.isRequired,
  wrapperClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  largeNumberClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  onChangeHandler: PropTypes.func
}

CountCard.defaultProps = {
  backgroundColour: "#cccccc",
  labelTextColour: "white",
  wrapperClassName: "",
  largeNumberClassName: "",
  labelClassName: "",
  onChangeHandler: () => {}
}

export default CountCard
