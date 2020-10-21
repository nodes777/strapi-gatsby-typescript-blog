import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
  const { site, allStrapiArticle } = useStaticQuery(
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
  console.log(site)
  console.log(allStrapiArticle)

  return { site, allStrapiArticle }
}
