import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import LayoutRoot from '../components/LayoutRoot'

import ArticlesComponent from '../components/Articles'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allStrapiArticle:Article[]
}

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allStrapiArticle {
          totalCount
          edges {
            node {
              id
              title
              content
              category {name}
              image {
                id
                childImageSharp{
                  fluid {
                    aspectRatio
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                      sizes
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
    `}


    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Strapi blog</h1>
            <ArticlesComponent articles={data.allStrapiArticle} />
          </div>
        </div>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
