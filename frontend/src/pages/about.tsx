import React from 'react'
import ReactMarkdown from 'react-markdown'
import LayoutRoot from '../components/LayoutRoot'
import md from '../content/a-markdown-page.md'

const about = () => (
  <LayoutRoot>
    asdasdsda
    <ReactMarkdown source={md} />
  </LayoutRoot>
)

export default about
