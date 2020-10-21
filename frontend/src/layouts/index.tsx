import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import LayoutRoot from '../components/LayoutRoot'

import Articles from '../components/Articles'

import { useSiteMetadata } from './use-site-metadata'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allStrapiArticle: {
    edges: Article[]
  }
}

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => {
  const queriedData = useSiteMetadata()
  console.log(queriedData)
  return (
    <LayoutRoot>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Articles articles={queriedData.allStrapiArticle} />
        </div>
      </div>
    </LayoutRoot>
  )
}

export default IndexLayout
