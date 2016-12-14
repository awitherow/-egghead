'use strict'

const {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID
} = require('graphql')

const { videoType } = require('../')

const nodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolveType: (o) => {
    if (o.title) {
      return videoType
    } else {
      return null
    }
  }
})

module.exports = nodeInterface
