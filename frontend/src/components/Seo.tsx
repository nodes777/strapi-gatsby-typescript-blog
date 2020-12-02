import React from 'react'

import { Helmet } from 'react-helmet-async'
import { useStaticQuery, StaticQuery, graphql } from 'gatsby'
import { SEOProps } from '../typings'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      keywords: string
    }
  }
}

interface Props {
  seoProps: SEOProps
  // readonly children?: React.ReactNode
}

const SEO: React.FC<Props> = ({ children, seoProps }) => (
  <StaticQuery
    query={graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <Helmet
        htmlAttributes={{
          lang: `en`
        }}
        title={seoProps.title}
        // titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        link={[
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css'
          }
        ]}
        script={[
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js'
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js'
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js'
          }
        ]}
        meta={[
          {
            name: `description`,
            content: seoProps.description
          },
          {
            name: `keywords`,
            content: seoProps.keywords
          },
          {
            property: `og:title`,
            content: seoProps.title
          },
          {
            property: `og:description`,
            content: seoProps.description
          },
          {
            property: `og:type`,
            content: `website`
          }
        ]}
      />
    )}
  />
)

export default SEO
