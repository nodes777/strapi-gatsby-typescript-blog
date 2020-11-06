import * as React from 'react'
import Seo from './Seo'
import Header from './Header'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Seo />
    <Header />
    {children}
  </>
)

export default LayoutRoot
