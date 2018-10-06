const Collaborator = require('../models/collaborators')

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

module.exports = {
  getCollaborators
}