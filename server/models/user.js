const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  name: String,
  lastname : String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false }
})


module.exports = mongoose.model('User', UserSchema)