import React from 'react'

import GovUkTemplate from '../GovUkTemplate/GovUkTemplate.jsx'
import PageContent from '../PageContent/PageContent.jsx'
import FeedbackBanner from '../FeedbackBanner/FeedbackBanner.jsx'

export default class GovUkAppWrapper extends React.Component {
  render () {
    return (
      <div className='App'>
        <GovUkTemplate {...this.props}>
          <PageContent>
            <FeedbackBanner feedback={this.props.feedback} /> {this.props.children}
          </PageContent>
        </GovUkTemplate>
      </div>
    )
  }
};
