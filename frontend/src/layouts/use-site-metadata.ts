import { useStaticQuery, graphql } from 'gatsby'

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
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                    # load quality via width?
                    # then handle containing div as breakpoints for responsiveness? that doesn't work for some reason
                    fixed(quality: 100) {
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
