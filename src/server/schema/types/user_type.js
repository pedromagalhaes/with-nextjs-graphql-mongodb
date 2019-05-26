const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString }
  }
})

module.exports = UserType
