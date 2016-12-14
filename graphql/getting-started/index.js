'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 3000
const server = express()

const schema = buildSchema(`
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }

  type Query {
    video: Video
    videos: [Video]
  }
`)

const videoA = {
  id: 1,
  title: 'first video',
  duration: 180,
  watched: true
}

const videoB = {
  id: 2,
  title: 'second video',
  duration: 180,
  watched: true
}

const videos = [videoA, videoB]

const resolvers = {
  video: {
    id: 1,
    title: 'bar',
    duration: 180,
    watched: true
  },
  videos: () => videos
}

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers
}))

server.listen(PORT, () => console.log(`listening on localhost:${PORT}`))
