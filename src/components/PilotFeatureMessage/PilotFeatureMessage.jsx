import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message.jsx'

// import './PilotFeatureMessage.scss'
/**
 * Pilot Feature Message
 * Returns a message configured to be a pilot message for a new feature
 * @class PilotFeatureMessage
 * @extends {React.Component}
 */
class PilotFeatureMessage extends React.Component {
  render () {
    return (
      <Message
        classes={'info-summary'}
        headerText={'Pilot Feature'}
        messageText={'This is a pilot feature and has limited functionality. Your feedback will help us improve it.'}
      >
        <p>
          {this.props.featureText}
        </p>
      </Message>
    )
  }
}

PilotFeatureMessage.propTypes = {
  featureText: PropTypes.string
}

PilotFeatureMessage.defaultProps = {
  featureText: ''
}

export default PilotFeatureMessage
