import React from "react"

import "./PageContent.scss"

export default class PageContent extends React.Component {
  render() {
    return <div className="PageContent">{this.props.children}</div>
  }
}
