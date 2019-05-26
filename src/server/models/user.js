const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String
})

UserSchema.pre('save', function save(next) { // eslint-disable-line consistent-return
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => { // eslint-disable-line consistent-return
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, null, (err, hash) => { // eslint-disable-line consistent-return, no-shadow
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

mongoose.model('user', UserSchema)
