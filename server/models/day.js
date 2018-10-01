const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DaySchema = new Schema({
    day: {type: String}
})

module.exports = mongoose.model('Day',DaySchema);