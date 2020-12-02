'use strict'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'TayloredToTaylor Photos',
    description: 'TayloredToTaylors Wildlife Photography Blog',
    author: {
      name: 'Taylor Nodell',
      url: 'https://taylornodell.com/'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'photo',
          'tag'
        ],
        queryLimit: 1000
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        // upped from 50
        defaultQuality: 100,
        failOnError: true
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-graphql-loader'
  ]
}
