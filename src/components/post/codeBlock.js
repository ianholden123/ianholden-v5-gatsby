import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ language, children }) => {
  return (
    <SyntaxHighlighter
      style={a11yDark}
      language={language}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
