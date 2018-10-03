const Program = require('../models/program')

function read (req, res) {
    Program.find({ 
        name: req.body.name}, (err, program) => {
      if (err) return res.status(500).send({ message: err })
      if (!program.length) return res.status(401).send({ message: 'No existe el programa' })
  
      req.program = program
      res.status(200).send({
        program: program,
      })
    })
  }

module.exports = {
    read
}