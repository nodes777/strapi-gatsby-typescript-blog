import * as React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <HelmetProvider>
    <IndexLayout>
      <Page></Page>
    </IndexLayout>
  </HelmetProvider>
)

export default IndexPage
