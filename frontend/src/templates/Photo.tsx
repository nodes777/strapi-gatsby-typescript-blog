import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutRoot from '../components/LayoutRoot'
import { PhotoInterface } from '../typings'

import styles from '../styles/photoPage.module.css'
import classnames from 'classnames'
import { PhotoDesc } from '../components/photoDesc'
import PhotoSeo from '../components/PhotoSeo'

interface PhotoProps {
  data: {
    strapiPhoto: PhotoInterface['node']
  }
}

// data is from our graphQL query, which is run ahead of time in createPages
const Photo: React.FC<PhotoProps> = ({ data }) => {
  const photo = data.strapiPhoto
  console.log(photo)
  const aspectRatio = photo.image.imageFile.childImageSharp.fluid.aspectRatio
  const isPortraitOrientation = aspectRatio < 1

  const seoObj = {
    title: photo.title,
    description: `${photo.title} ${photo.iNatData.commonName}`,
    keywords: [photo.iNatData.latinName, photo.iNatData.commonName]
  }

  return (
    <LayoutRoot>
      <PhotoSeo seoProps={seoObj} />
      {isPortraitOrientation ? (
        <div className={styles.portraitPhotoContainer}>
          <div className={styles.portraitRowContainer}>
            <div className={classnames(styles.imageContainer, styles.portraitImageContainer)}>
              <Img fluid={photo.image.imageFile.childImageSharp.fluid} />
            </div>
            <div className={styles.portraitTextContainer}>
              <PhotoDesc photoData={photo} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.photoContainer}>
          <div className={classnames(styles.imageContainer)}>
            <Img fluid={photo.image.imageFile.childImageSharp.fluid} />
          </div>
          <PhotoDesc photoData={photo} />
        </div>
      )}
    </LayoutRoot>
  )
}

export default Photo

export const query = graphql`
  query PhotoQuery($id: Int!) {
    strapiPhoto(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      iNatData {
        commonName
        dateTaken
        endemic
        introduced
        latinName
        native
        placeGuess
        qualityGrade
        threatened
        taxonAncestors {
          preferredCommonName
          name
          rank
        }
      }
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
