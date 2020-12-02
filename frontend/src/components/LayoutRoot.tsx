import * as React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { SEOProps } from '../typings'
import Header from './Header'
import Seo from './Seo'
interface LayoutRootProps {
  className?: string
  seoProps: SEOProps
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className, seoProps }) => (
  <HelmetProvider>
    <Seo seoProps={seoProps} />
    <Header />
    {children}
  </HelmetProvider>
)

export default LayoutRoot
