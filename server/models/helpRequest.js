const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HelpRequestSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    hour: [{ type: Schema.Types.ObjectId, ref: 'Hour' }],
    subject: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    info: {type: String, required: false}
})

module.exports = mongoose.model('HelpRequest',HelpRequestSchema);