'use strict'

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} = require('graphql')

const express = require('express')
const graphqlHTTP = require('express-graphql')

const { getVideoById } = require('./src/data')

const PORT = process.env.PORT || 3000
const server = express()

const videoType = new GraphQLObjectType({
  name: 'Video',
  description: 'a video on egghead.io',
  fields: {
    id: {
      type: GraphQLID,
      description: 'the ID of the video'
    },
    title: {
      type: GraphQLString,
      description: 'title of the video'
    },
    duration: {
      type: GraphQLInt,
      description: 'the length of the video'
    },
    watched: {
      type: GraphQLBoolean,
      description: 'has the user watched the video?'
    },
  }
})

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'the root query type',
  fields: {
    video: {
      type: videoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'id of the video'
        }
      },
      resolve: (_, args) => getVideoById(args.id)
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

server.listen(PORT, () => console.log(`listening on localhost:${PORT}`))
