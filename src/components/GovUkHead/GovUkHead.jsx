import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import crownIcon from '../../static/svg/gov.uk_logotype_crown.svg'
// import opengraphImage from '../../static/images/opengraph-image.png'

class GovUkHead extends React.Component {
  constructor () {
    super()
    this.state = {
      links: [
        { rel: 'mask-icon', color: '#0b0c0c', href: crownIcon }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        // , { property: 'og:image', content: opengraphImage }
      ]
    }
  }

  render () {
    return (
      <Helmet title={this.props.title} links={this.state.links} meta={this.state.meta} />
    )
  }
}

GovUkHead.propTypes = {
  title: PropTypes.string
}

GovUkHead.defaultProps = {
  title: 'Home Page'
}

export default GovUkHead
