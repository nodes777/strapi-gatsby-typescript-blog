import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { Photo } from '../typings'
import styles from '../styles/card.module.css'

interface CardProps {
  photo: Photo
}

const Card: React.FC<CardProps> = ({ photo }) => {
  console.log(photo.node)

  return (
    <div className={styles.cardContainer}>
      <Link to={`/photo/${photo.node.strapiId}`}>
        <Img fluid={photo.node.image.childImageSharp.fluid} />
        <div>
          <h2 id={photo.node.strapiId}>{photo.node.title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Card
