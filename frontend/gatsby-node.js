'use strict'

const path = require('path')
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const { createTaggedTemplate } = require('typescript')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        photos: allStrapiPhoto {
          edges {
            node {
              strapiId
            }
          }
        }
        tags: allStrapiTag {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog photo pages.
  const photos = result.data.photos.edges
  const tags = result.data.tags.edges

  photos.forEach((photo, index) => {
    createPage({
      path: `/photo/${photo.node.strapiId}`,
      component: require.resolve('./src/templates/Photo.tsx'),
      // this id is used in the graphQL call in the file
      context: {
        id: photo.node.strapiId
      }
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
      }
    })
  }
}

// this is a workaround for gatsby-source-strapi not creating childImageSharp nodes correctly
exports.createResolvers = ({ actions, cache, createNodeId, createResolvers, store, reporter }) => {
  const { createNode } = actions
  createResolvers({
    StrapiPhotoImage: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            // DOUBLE CHECK THIS WORKS, otherwise just the latter expression
            url: `${process.env.API_URL}${source.url}` || `http://localhost:1337${source.url}`, // for S3 upload ${source.url}. For local: `http://localhost:1337${source.url}`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          })
        }
      }
    }
  })
}
