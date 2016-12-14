'use strict'

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} = require('graphql')

const express = require('express')
const graphqlHTTP = require('express-graphql')

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
      resolve: () => new Promise(resolve => {
        resolve({
          id: 'a',
          title: 'Create a GraphQL server',
          duration: 180,
          watched: true,
        })
      })
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
