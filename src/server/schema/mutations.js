const graphql = require('graphql')
const mongoose = require('mongoose')

const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { firstName, lastName, email, password }, req) {
        return AuthService.signup({ firstName, lastName, email, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req, res, next) {
        return AuthService.login({ email, password, req, res, next })
      }
    }
  }
})

module.exports = mutation
