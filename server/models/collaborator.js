const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CollaboratorSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  subject: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
})


module.exports = mongoose.model('Collaborator', CollaboratorSchema)