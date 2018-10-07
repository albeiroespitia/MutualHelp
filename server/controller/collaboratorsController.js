const Collaborator = require('../models/collaborator')

function read (req, res) {
    Collaborator.find({ 
      email: req.body.email}, (err, collaborator) => {
    if (err) return res.status(500).send({ message: err })
    if (!collaborator.length) return res.status(401).send({ message: 'No existe el colaborador' })

    req.collaborator = collaborator
    res.status(200).send({
      collaborator: collaborator,
    })
  })
}

function create (req, res, next) {
  const collaborator = new Collaborator({
    user : res.locals.user[0]._id,
    subject : req.body.asignaturaBueno
  })

  collaborator.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el colaborador: ${err}` })
    next();
  })
}

module.exports = {
  read,
  create
}