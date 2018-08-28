import React from 'react'

import { getAccessStatus } from '../../helpers/auth/Auth'
import KEYS from '../../helpers/auth/AuthKeynames'

import '../SignIn/SignIn.scss'

export default class LandingPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      signInKey: {}
    }
  }

  componentWillMount (nextProps) {
    this.setState({
      signInKey: getAccessStatus()
    })
  }

  getURL (location) {
    let url = location
    window.location = url
  }

  renderMessage () {
    switch (this.state.signInKey) {
      case KEYS.ACCESS_PENDING:
        return <div>
          <h1 className='heading-medium' id='access-pending'>Your Access is Pending</h1>
        </div>
      case KEYS.NEED_TO_REQUEST_ACCESS:
        return <div>
          <h1 className='heading-medium'>Please Request Access to use this Service</h1>
          <a className='button button-start' role='button' onClick={this.getURL.bind(this, '/request-access')}id='request-access'>Request Access</a>
        </div>
      case KEYS.ACCESS:
        return <div>
          <a className='button button-start' role='button' onClick={this.getURL.bind(this, '/start')}id='access'>Start</a>
        </div>
      default:
        return <div>
          <a onClick={this.getURL.bind(this, '/sign-in')} className='button button-start' role='button' id='sign-in-message' >Sign in to access ACDP</a>
          <a onClick={this.getURL.bind(this, '/sign-in')} id='register' className='sign-link'>
          Register for a NCSC SignIn account
          </a>
        </div>
    }
  }

  render () {
    return (
      <div className='landingPage'>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <div className='message'>
          {this.renderMessage()}
        </div>
      </div>
    )
  }
}
