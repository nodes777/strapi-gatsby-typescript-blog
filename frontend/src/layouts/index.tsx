import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import LayoutRoot from '../components/LayoutRoot'

import Photos from '../components/Photos'

import { useSiteMetadata } from './use-site-metadata'

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => {
  const queriedData = useSiteMetadata()
  return (
    <LayoutRoot>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>TayloredToTaylor's Wildlife Photos</h1>
          <Photos photos={queriedData.allStrapiPhoto} />
        </div>
      </div>
    </LayoutRoot>
  )
}

export default IndexLayout
