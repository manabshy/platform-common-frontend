/* global document */
import React from "react"
import PropTypes from "prop-types"

export default class GDSTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formCSS: this.props.invalid ? "form-group error" : "form-group",
      remainingCharacters: this.charactersRemaining()
    }

    this.onChangeEvent = this.onChangeEvent.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      formCSS: nextProps.invalid ? "form-group error" : "form-group",
      remainingCharacters: this.charactersRemaining()
    })
  }

  getValue() {
    return this._textInput.value
  }

  //render the error message if exists and invalid
  renderErrorMessage() {
    if (this.props.invalid && this.props.errorMessage) {
      return (
        <span className="error-message error-message-inline">
          {this.props.errorMessage}
        </span>
      )
    }
  }

  renderHint() {
    if (this.props.hint) {
      return <span className="form-hint">{this.props.hint}</span>
    }
  }

  onChangeEvent(event) {
    this.setState({
      remainingCharacters: this.charactersRemaining()
    })
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  renderInput() {
    if (this.props.textArea) {
      return (
        <textArea
          id={this.props.id}
          onBlur={this.props.onBlur}
          onChange={this.onChangeEvent}
          defaultValue={this.props.value}
          type="text"
          className="form-control full"
          autoFocus={this.props.autoFocus}
          maxLength={this.props.maxLength}
          ref={input => (this._textInput = input)}
          aria-label={this.props.labelText}
        />
      )
    } else {
      return (
        <input
          id={this.props.id}
          onBlur={this.props.onBlur}
          onChange={this.onChangeEvent}
          defaultValue={this.props.value}
          type="text"
          className="form-control full"
          autoFocus={this.props.autoFocus}
          maxLength={this.props.maxLength}
          ref={input => (this._textInput = input)}
          aria-label={this.props.labelText}
        />
      )
    }
  }

  renderCharactersRemaining = () => {
    if (this.props.showCharactersRemaining && this._textInput) {
      return <p>{this.state.remainingCharacters} characters remaining</p>
    }
  }

  charactersRemaining = () => {
    if (this.props.maxLength && this._textInput) {
      return this.props.maxLength - this._textInput.value.length
    } else {
      return 0
    }
  }

  render() {
    return (
      <div className={this.state.formCSS}>
        <legend className="form-label-bold">{this.props.labelText}</legend>
        {this.renderErrorMessage()}
        {this.renderHint()}
        {this.renderInput()}
        {this.renderCharactersRemaining()}
      </div>
    )
  }
}

GDSTextInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.string,
  textArea: PropTypes.bool,
  autoFocus: PropTypes.bool,
  errorMessage: PropTypes.string,
  invalid: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  showCharactersRemaining: PropTypes.bool,
  maxLength: PropTypes.number
}
