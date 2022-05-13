# TayloredToTaylor

A wildlife photography blog built with [Strapi](https://strapi.io/), [Gatsby](https://www.gatsbyjs.com/), and [Typescript](https://www.typescriptlang.org/). Forked from this [tutorial](https://strapi.io/blog/build-a-static-blog-with-gatsby-typescript-and-strapi) and fixed errors.

Live on  [tayloredtotaylor.xyz](https://www.tayloredtotaylor.xyz/)

## Quickstart

/backend
`yarn run develop`

/frontend
`yarn run dev`

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `yarn`.

## Installation

`git clone https://https://github.com/nodes777/strapi-gatsby-typescript-blog`

`cd backend`

`yarn install`

Open a new node shell

`cd frontend`

`yarn install`

Once installed:

/backend

`yarn build`

`yarn run develop`

/frontend

`yarn run dev`

### DevLogs

* [Building A Photo Blog on Strapi Gatsby And Typescript: Part 1 Starting to Start](https://tnodes.medium.com/building-a-photo-blog-on-stapi-gatsby-and-typescript-part-1-starting-to-start-c6787ab2702b)

* [Building A Photo Blog on Strapi Gatsby And Typescript: Part 2 Connecting the Backend to iNaturalist](https://tnodes.medium.com/building-a-photo-blog-on-strapi-gatsby-and-typescript-part-2-connecting-the-backend-to-inaturalist-3fd499bb0360)

* [Building A Photo Blog on Strapi Gatsby And Typescript: Part 3 Frontend](https://tnodes.medium.com/building-a-photo-blog-on-strapi-gatsby-and-typescript-part-3-frontend-3c60324b44c1)

* [Building A Photo Blog on Strapi Gatsby And Typescript: Part 4 Deployment](https://tnodes.medium.com/building-a-photo-blog-on-strapi-gatsby-and-typescript-part-4-deployment-b996cc69d356)

#### Tips

* Make sure permissions are valid for a given content type.

* Make sure a content type is published for it to show up in the graphql.

* gatsby-config --> gatsby-node --> pages/index.tsx --> layouts/index.tsx AND use-site-metadata.ts -->

* For portrait pics -> Windows doesn't recognize exif info -> view and save in D:\IrfanView
