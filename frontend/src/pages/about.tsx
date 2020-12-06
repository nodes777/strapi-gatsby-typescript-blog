import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import LayoutRoot from '../components/LayoutRoot'
import styles from '../styles/about.module.css'

const about = ({ data }) => {
  console.log(data)
  return (
    <LayoutRoot>
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.titleContainer}>
          <div className={styles.imageContainer}>
            <Img fluid={data.file.childImageSharp.fluid} alt="Taylor as a dog avatar" />
          </div>
          <div className={styles.taylorContainer}>
            <h2>Taylor</h2>
            <div className={styles.textContainer}>
              <p>
                Taylor is a developer, backpacker, naturalist and <a href="https://taylornodell.bandcamp.com/">musician</a>. He's probably
                in Australia.
              </p>
            </div>
            <div className={styles.textContainer}>
              <p>
                This photo blog was made with Strapi and Gatsby. You can see the{' '}
                <a href="https://github.com/nodes777/strapi-gatsby-typescript-blog">source code on github</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutRoot>
  )
}
export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "prof.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "prof.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         fixed(width: 200) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
