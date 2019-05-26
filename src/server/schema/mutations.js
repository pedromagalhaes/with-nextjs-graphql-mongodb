const graphql = require('graphql')
const mongoose = require('mongoose')

const Song = mongoose.model('song')
const Lyric = mongoose.model('lyric')

const UserType = require('./types/user_type')
const AuthService = require('../services/auth')
const SongType = require('./types/song_type')
const LyricType = require('./types/lyric_type')

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
    },
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Song({ title })).save()
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content)
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id)
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.remove({ _id: id })
      }
    }
  }
})

module.exports = mutation
