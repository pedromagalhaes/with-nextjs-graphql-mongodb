const mongoose = require('mongoose')
const graphql = require('graphql')

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const UserType = require('./user_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    }
  }
})

module.exports = RootQueryType
