import { useStaticQuery, graphql } from 'gatsby'
import { PhotoInterface } from '../typings'

interface TenPhotoQuery {
  edges: PhotoInterface[]
}

export const getTenPhotos = (numToSkip: number): TenPhotoQuery => {
  const tenPhotos = useStaticQuery(
    graphql`
      query TenPhotoQuery($numToSkip: Int!) {
        allStrapiPhoto(limit: 10, sort: { order: DESC, fields: published_at }, skip: $numToSkip) {
          totalCount
          edges {
            node {
              strapiId
              id
              title
              content
              tags {
                name
              }
              image {
                id
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 4000, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return tenPhotos
}
