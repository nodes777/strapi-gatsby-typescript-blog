import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { Photo } from '../typings'
import styles from '../styles/card.module.css'
import classnames from 'classnames'

interface CardProps {
  photo: Photo
}

const Card: React.FC<CardProps> = ({ photo }) => {
  console.log(photo.node)

  const aspectRatio = photo.node.image.imageFile.childImageSharp.fluid.aspectRatio

  console.log(`aspectRatio ${aspectRatio}`)

  return (
    // if aspectRatio is greater than 1 it's a portrait
    <div className={classnames(styles.cardContainer, aspectRatio > 1 ? null : styles.portraitCardContainer)}>
      <Link to={`/photo/${photo.node.strapiId}`}>
        <Img fluid={photo.node.image.imageFile.childImageSharp.fluid} />
        <div>
          <h2 id={photo.node.strapiId}>{photo.node.title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Card
