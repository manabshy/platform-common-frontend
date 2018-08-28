import React from 'react'
import InviteUserModal from './InviteUserModal'
import './InviteUser.scss'

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <header>
          <h1 className='heading-xlarge'>Invitations</h1>
        </header>

        <div className='grid-row'>
          <div className='column-two-thirds'>
            <p className='lede'>You can only invite users with a public sector email address.</p>
            <button id='invite-others-button' className='button' onClick={this.props.onOpenInviteUserModal}>Invite others</button>
          </div>
        </div>

        <InviteUserModal
          isOpen={this.props.inviteUserModalIsOpen}
          service={this.props.serviceName}
          onInviteUser={this.props.onInviteUser}
          onRequestClose={this.props.onCloseInviteUserModal}
          errors={this.props.errors}
          sendingInvite={this.props.sendingInvite}
        />
      </div>
    )
  }
}
