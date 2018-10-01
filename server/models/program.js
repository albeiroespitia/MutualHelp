const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProgramSchema = new Schema({
    name : {type: String}
})

module.exports = mongoose.model('Program',ProgramSchema);