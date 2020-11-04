import React from 'react'
import { graphql } from 'gatsby'

import LayoutRoot from '../components/LayoutRoot'
import Photos from '../components/Photos'

interface CategoryProps {
  data: {
    photos: {
      edges: Photo[]
    }
    category: {
      name: string
    }
  }
}

// export const query = graphql`
//   query Category($id: Int!) {
//     photos: allStrapiPhoto(filter: { category: { id: { eq: $id } } }) {
//       edges {
//         node {
//           strapiId
//           title
//           # category {
//           #   name
//           # }
//           image {
//             childImageSharp {
//               fluid(maxWidth: 595, quality: 100) {
//                 ...GatsbyImageSharpFluid
//                 ...GatsbyImageSharpFluidLimitPresentationSize
//               }
//             }
//           }
//         }
//       }
//     }
//     category: strapiCategory(strapiId: { eq: $id }) {
//       name
//     }
//   }
// `

const Category: React.FC<CategoryProps> = ({ data }) => {
  const photos = data.photos
  const category = data.category.name

  return (
    <LayoutRoot>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          BLAH
          {/* <h1>{category}</h1>
          <Articles articles={photos} /> */}
        </div>
      </div>
    </LayoutRoot>
  )
}

export default Category
