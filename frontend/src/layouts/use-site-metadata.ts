import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
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

                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    sizes
                    src
                    srcSet
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
