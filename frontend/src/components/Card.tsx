import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

interface ArticleProps {
  photo: Photo
}

const Card: React.FC<ArticleProps> = ({ photo }) => {
  console.log(photo.node)

  return (
    <Link to={`/photo/${photo.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img fluid={photo.node.image.childImageSharp.fluid} />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {/* {photo.node.category.name} */}
          </p>
          <p id="title" className="uk-text-large">
            {photo.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
