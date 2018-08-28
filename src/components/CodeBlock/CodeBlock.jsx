import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlightjs'

import 'highlightjs/styles/github.css'
import './CodeBlock.scss'

/*
Usage
<CodeBlock language="whois">{whois}</CodeBlock>
*/

class CodeBlock extends React.Component {
  componentDidMount () {
    this.processCode()
  }

  componentDidUpdate () {
    this.processCode()
  }

  processCode () {
    hljs.highlightBlock(this.refs.codeElement)
  }

  render () {
    return (
      <pre className='CodeBlock'>
        <code ref='codeElement' className={this.props.language}>{this.props.children}</code>
      </pre>
    )
  }
}

CodeBlock.propTypes = {
  children: PropTypes.string,
  language: PropTypes.string
}

CodeBlock.defaultProps = {
  language: ''
}

export default CodeBlock
