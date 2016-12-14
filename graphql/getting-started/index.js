'use strict'

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} = require('graphql')


const express = require('express')
const graphqlHTTP = require('express-graphql')

const { getVideoById, getVideos, createVideo } = require('./src/data')
const {
  globalIdField,
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs
} = require('graphql-relay')
const { nodeInterface, nodeField } = require('./src/node')

const PORT = process.env.PORT || 3000
const server = express()

const videoType = new GraphQLObjectType({
  name: 'Video',
  description: 'a video on egghead.io',
  fields: {
    id: globalIdField(),
    title: {
      type: GraphQLString,
      description: 'title of the video'
    },
    duration: {
      type: GraphQLInt,
      description: 'the length of the video'
    },
    released: {
      type: GraphQLBoolean,
      description: 'has the user released the video?'
    },
  },
  interfaces: [nodeInterface]
})
exports.videoType = videoType

const { connectionType: VideoConnection } = connectionDefinitions({
  nodeType: videoType,
  connectionFields: () => ({
    totalCount: {
      type: GraphQLInt,
      description: 'a total number of objects in this connection',
      resolve: conn => conn.edges.length
    }
  })
})

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'the root query type',
  fields: {
    node: nodeField,
    videos: {
      type: VideoConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        getVideos(),
        args
      )
    },
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

const videoInputType = new GraphQLInputObjectType({
  name: 'VideoInput',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'title of the video'
    },
    duration: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the length of the video'
    },
    released: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'has the user released the video?'
    },
  }
})

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'root mutation type',
  fields: {
    createVideo: {
      type: videoType,
      args: {
        video: {
          type: new GraphQLNonNull(videoInputType)
        }
      },
      resolve: (_, args) => createVideo(args.video)
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
})

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

server.listen(PORT, () => console.log(`listening on localhost:${PORT}`))
