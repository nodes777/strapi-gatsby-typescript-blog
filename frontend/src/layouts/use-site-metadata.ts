import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
  const { queriedData } = useStaticQuery(
    graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allStrapiArticle {
          totalCount
          edges {
            node {
              id
              title
              content
              category {
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
  return queriedData
}
