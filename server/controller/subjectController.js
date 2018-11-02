const Subject = require('../models/subject')

function read (req, res) {
    Subject.find({}, (err, subject) => {
      if (err) return res.status(500).send({ message: err })
      if (!subject.length) return res.status(401).send({ message: 'No existe la materia' })

      req.subject = subject
      res.status(200).send({
        subject: subject,
      })
    })
  }

  function readById (req, res) {
      Subject.findById(req.body.id, (err, subject) => {
        if (err) return res.status(500).send({ message: err })

        req.subject = subject
        res.status(200).send({
          subject: subject,
        })
      })
    }




module.exports = {
    read,
    readById
}
