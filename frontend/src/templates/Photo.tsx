import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import ReactMarkdown from 'react-markdown'

import LayoutRoot from '../components/LayoutRoot'
import { PhotoInterface } from '../typings'

import styles from '../styles/photoPage.module.css'

interface PhotoProps {
  data: {
    strapiPhoto: PhotoInterface['node']
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
        imageFile {
          childImageSharp {
            fluid(maxWidth: 6000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Photo: React.FC<PhotoProps> = ({ data }) => {
  const photo = data.strapiPhoto
  console.log(photo)

  console.log(styles)

  return (
    <LayoutRoot>
      <div className={styles.photoContainer}>
        <div className={styles.imageContainer}>
          <Img fluid={photo.image.imageFile.childImageSharp.fluid} />
        </div>
        <h1>{photo.title}</h1>
        <div>
          <ReactMarkdown source={photo.content} />
        </div>
      </div>
    </LayoutRoot>
  )
}

export default Photo
