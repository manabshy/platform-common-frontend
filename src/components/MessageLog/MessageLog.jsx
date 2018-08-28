import React from 'react'

import './MessageLog.scss'

/**
 * Render Error Messages
 *
 * @param {array} items
 * @returns React Components
 */
const renderErrors = (items, clearHandler) => {
  let clearErrorControl = (handler) => {
    return (
      <div className='message-controls'>
        <a href='#' className='button error-control' onClick={e => {
          e.preventDefault()
          handler()
        }} >Clear Error Messages</a>
      </div>
    )
  }

  const renderErrorMessages = () => {
    return items.map((m, i) => {
      return (
        <div key={'err-msg-' + i} className='error-summary' role='group' tabIndex='-1'>

          <h1 className='heading-medium error-summary-heading'>
            { m.type } Error
          </h1>

          <p>
            { m.content.toString() }
          </p>

        </div>
      )
    })
  }

  return (
    <div className='error-messages'>
      { renderErrorMessages() }
      { (items.length) ? clearErrorControl(clearHandler) : '' }
    </div>
  )
}

/**
 * Render Success Messages
 *
 * @param {array} items
 * @returns React Components
 */
const renderSuccess = (items, clearHandler) => {
  let clearSuccessControl = (handler) => {
    return (
      <div className='message-controls'>
        <a href='#' className='button success-control' onClick={e => {
          e.preventDefault()
          handler()
        }} >Clear Messages</a>
      </div>
    )
  }

  const renderSuccessMessages = () => {
    return items.map((m, i) => {
      return (
        <div key={'success-msg-' + i} className='success-summary' role='group' tabIndex='-1'>

          <h1 className='heading-medium success-summary-heading'>
            { m.type } Success
          </h1>

          <p>
            { m.content.toString() }
          </p>

        </div>
      )
    })
  }

  return (
    <div className='success-messages'>
      { renderSuccessMessages() }
      { (items.length) ? clearSuccessControl(clearHandler) : '' }
    </div>
  )
}

/**
 * Message log
 *
 * @param {any} props
 */
const MessageLog = ({ items, clearErrorHandler, clearSuccessHandler }) => (
  <div className='message-log-container'>
    { ('errorMessages' in items) && renderErrors(items.errorMessages, clearErrorHandler) }
    { ('successMessages' in items) && renderSuccess(items.successMessages, clearSuccessHandler) }
  </div>
)

export default MessageLog
