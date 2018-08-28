import React from "react"
import PropTypes from "prop-types"

import "./FeedbackBanner.scss"

const DEFAULT_FEEDBACK = {
  message: "This is a new service.",
  build: "ALPHA"
}

class FeedbackBanner extends React.Component {
  render() {
    // use defaults if feedback is missing
    let feedback = this.props.feedback || DEFAULT_FEEDBACK

    return (
      <div className="FeedbackBanner phase-banner">
        <p>
          <strong className="phase-tag">{feedback.build}</strong>
          <span dangerouslySetInnerHTML={{ __html: feedback.message }} />
        </p>
      </div>
    )
  }
}

FeedbackBanner.propTypes = {
  feedback: PropTypes.shape({
    message: PropTypes.string.isRequired,
    build: PropTypes.string.isRequired
  })
}

FeedbackBanner.defaultProps = {
  feedback: DEFAULT_FEEDBACK
}

export default FeedbackBanner
