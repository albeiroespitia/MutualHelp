const Subject = require('../models/subject')

function read (req, res) {
    Subject.find({ 
        name: req.body.name}, (err, subject) => {
      if (err) return res.status(500).send({ message: err })
      if (!subject.length) return res.status(401).send({ message: 'No existe la materia' })
  
      req.subject = subject
      res.status(200).send({
        subject: subject,
      })
    })
  }

module.exports = {
    read
}