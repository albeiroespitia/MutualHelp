const Day = require('../models/day')

function read (req, res) {
    Day.find({ 
        day: req.body.day}, (err, day) => {
      if (err) return res.status(500).send({ message: err })
      if (!day.length) return res.status(401).send({ message: 'No existe el dia' })
  
      req.day = day
      res.status(200).send({
        day: day,
      })
    })
  }

module.exports = {
    read
}