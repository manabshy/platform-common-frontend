import React from "react"
import PropTypes from "prop-types"
import Head from "../GovUkHead/GovUkHead.jsx"
import GovUkCookieMessage from "../GovUkCookieMessage/GovUkCookieMessage.jsx"
import GovUkHeader from "../GovUkHeader/GovUkHeader.jsx"
import GovUkFooter from "../GovUkFooter/GovUkFooter.jsx"

import "./GovUkTemplate.scss"

class GovUkTemplate extends React.Component {
  render() {
    return (
      <div className="GovUkTemplate">
        <Head title={this.props.title || null} />
        <GovUkCookieMessage />
        <GovUkHeader
          appName={this.props.appName || this.props.title}
          navigation={this.props.navigation}
          noAuth={this.props.noAuth}
          allowInvite={this.props.allowInvite}
          userData={this.props.userData}
        />
        <div id="global-header-bar" />
        {this.props.children}
        <GovUkFooter
          contactEmail={this.props.contactEmail}
          version={this.props.version}
          footerNavigation={this.props.footerNavigation}
        />
      </div>
    )
  }
}

GovUkTemplate.propTypes = {
  headerComponent: PropTypes.node,
  children: PropTypes.node
}

export default GovUkTemplate
