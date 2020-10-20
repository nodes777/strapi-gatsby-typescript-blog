'use strict'

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
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

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges

  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.strapiId}`,
      component: require.resolve('./src/templates/Article.tsx'),
      context: {
        id: article.node.strapiId
      }
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.strapiId}`,
      component: require.resolve('./src/templates/Category.tsx'),
      context: {
        id: category.node.strapiId
      }
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
