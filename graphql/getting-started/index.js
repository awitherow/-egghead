'use strict'

const { graphql, buildSchema } = require('graphql')

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

const query = `
  query myFirstQuery {
    video {
      id,
      title,
      duration,
      watched
    }
  }
`
graphql(schema, query, resolvers).then(
  result => console.log(result)
).catch(
  error => console.log(error)
)
