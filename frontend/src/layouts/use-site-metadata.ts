import { useStaticQuery, graphql } from 'gatsby'
import { Photo } from '../typings'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allStrapiPhoto: {
    edges: Photo[]
  }
}

export const useSiteMetadata = (): StaticQueryProps => {
  const { site, allStrapiPhoto } = useStaticQuery(
    graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allStrapiPhoto {
          # TODO: limit to first 10? sort by date added?
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
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                    fixed {
                      ...GatsbyImageSharpFixed
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
