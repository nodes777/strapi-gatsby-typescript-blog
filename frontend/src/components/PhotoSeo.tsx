import React from 'react'
import { Helmet } from 'react-helmet-async'

interface PhotoSeoProps {
  seoProps: { readonly title: string; readonly description: string; readonly keywords: string[] }
}

const PhotoSeo: React.FC<PhotoSeoProps> = ({ seoProps }) => (
  <Helmet
    meta={[
      {
        name: `description`,
        content: seoProps.description
      },
      {
        name: `keywords`,
        content: seoProps.keywords.join(' ')
      },
      {
        property: `og:title`,
        content: seoProps.title
      },
      {
        property: `og:description`,
        content: seoProps.description
      }
    ]}
  ></Helmet>
)

export default PhotoSeo
