const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HourSchema = new Schema({
    hours: {type: String}
})

module.exports = mongoose.model('Hour',HourSchema);