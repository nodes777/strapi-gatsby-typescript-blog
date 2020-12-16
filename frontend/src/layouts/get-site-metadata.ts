import { useStaticQuery, graphql } from 'gatsby'
import { PhotoInterface } from '../typings'

export interface InitialQueryType {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allStrapiPhoto: {
    edges: PhotoInterface[]
  }
}

export const getSiteMetaDataAndTenPhotos = (): InitialQueryType => {
  const { site, allStrapiPhoto } = useStaticQuery(
    graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allStrapiPhoto(limit: 10, sort: { order: DESC, fields: published_at }) {
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

  return { site, allStrapiPhoto }
}
