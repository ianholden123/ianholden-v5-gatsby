import React from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ codeBlockClass, children }) => {
  const removeWpClasses = () => {
    return codeBlockClass.split(' ').filter(blockClass => blockClass.substring(0, 2) !== 'wp').join(' ')
  }

  return (
    <SyntaxHighlighter
      style={a11yDark}
      language={removeWpClasses(codeBlockClass)}>
      {children}
    </SyntaxHighlighter>
  )
}

CodeBlock.propTypes = {
  codeBlockClass: PropTypes.string,
  children: PropTypes.node
}

export default CodeBlock
