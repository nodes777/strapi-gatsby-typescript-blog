import React from 'react'
import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import ReactMarkdown from 'react-markdown'

import LayoutRoot from '../components/LayoutRoot'

interface PhotoProps {
  data: {
    strapiPhoto: {
      image: {
        childImageSharp: {
          fixed: FixedObject
        }
      }

      title: string
      content: string
    }
  }
}

export const query = graphql`
  query PhotoQuery($id: Int!) {
    strapiPhoto(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        childImageSharp {
          fixed(width: 660) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const Photo: React.FC<PhotoProps> = ({ data }) => {
  const photo = data.strapiPhoto
  return (
    <LayoutRoot>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        >
          <Img className="banner-bg" fixed={photo.image.childImageSharp.fixed} />
        </div>
        <h1>{photo.title}</h1>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={photo.content} />
          </div>
        </div>
      </div>
    </LayoutRoot>
  )
}

export default Photo
