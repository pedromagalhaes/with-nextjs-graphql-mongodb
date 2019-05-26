/* eslint-disable no-unused-vars, no-console, no-unused-vars */

require('dotenv').config()
const nodemailer = require('nodejs-nodemailer-outlook')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)
const next = require('next')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const { parse } = require('url')
const routes = require('./routes')
const models = require('./models')
const passportConfig = require('./services/auth')
const schema = require('./schema/schema')

// env vars
const env = process.env.environment
const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV === 'development'

// next.js pages directory
const app = next({ dev, dir: 'src/app' })

// handle dynamic next.js routes requests
const handle = routes.getRequestHandler(app)

// mongo connection
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connection successfully done to Mongo DB')
})

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(expressValidator())
    server.use(cookieParser())

    // mongo db
    server.use(
      session({
        secret: 'kjaigalhdenmaaesross',
        key: 'token',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
          url: process.env.MONGO_URL,
          autoReconnect: true
        })
      })
    )

    // passport
    server.use(passport.initialize())
    server.use(passport.session())

    // graphql
    server.use('/graphql', graphqlHTTP(req => ({
      schema,
      context: {
        login: req.login.bind(req),
        user: req.user
      },
      graphiql: true
    })))

    // email server
    server.get(process.env.SMTP_URL, (req, res) => {
      nodemailer.sendEmail({
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        },
        to: 'pedro.magalhaes@outlook.com',
        subject: 'Hey you, awesome!',
        html: '<b>This is bold text</b>',
        text: 'This is text version!',
        onError: e => console.log(e),
        onSuccess: i => console.log(i)
      })
    })

    server.post('/logout', (req, res) => {
      req.logout()
      res.cookie('token', '', { maxAge: -1 })
      req.session.destroy(() => res.redirect('/'))
    })

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      handle(req, res, parsedUrl)
    })

    server.listen(port, (err) => {
      if (err) throw err
      const startupInfo = `${port} [${env}]`
      console.log(`[SERVER STARTED] Ready on port ${startupInfo}`)
    })
  })
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
