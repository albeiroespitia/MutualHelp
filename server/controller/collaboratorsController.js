const Collaborator = require('../models/collaborators')

function signIn (req, res) {
    Collaborator.find({ 
      email: req.body.email, 
      password : req.body.password}, (err, collaborator) => {
    if (err) return res.status(500).send({ message: err })
    if (!collaborator.length) return res.status(401).send({ message: 'No existe el colaborador' })

    req.collaborator = collaborator
    res.status(200).send({
      message: 'Te has logueado correctamente',
    })
  })
}

module.exports = {
  getCollaborators
}