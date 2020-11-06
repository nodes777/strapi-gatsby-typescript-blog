import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import styles from '../styles/card.module.css'

interface ArticleProps {
  photo: Photo
}

const Card: React.FC<ArticleProps> = ({ photo }) => {
  console.log(photo.node)

  return (
    <div className={styles.cardContainer}>
      <Link to={`/photo/${photo.node.strapiId}`}>
        <div>
          <Img fluid={photo.node.image.childImageSharp.fluid} />
          <div>
            <h2 id={photo.node.strapiId}>{photo.node.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
