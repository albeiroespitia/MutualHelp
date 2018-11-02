const User = require('../models/user')

function signUp (req, res) {
  console.log(req.body.name);
  const user = new User({
    name : req.body.name,
    lastname : req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
    return res.status(201).send({message:"creado papu"});
  })
}

function signIn (req, res) {
  User.find({
      email: req.body.email,
      password : req.body.password}, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user.length) return res.status(401).send({ message: 'No existe el usuario' })

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
    })
  })
}

function readByEmail (req, res, next) {
  User.find({
      email: req.body.email}, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user.length) return res.status(401).send({ message: 'No existe el usuario' })
    res.locals.user = user;
    next();
  })
}

function readAll (req, res) {
  User.find({}, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user.length) return res.status(401).send({ message: 'No existe el usuario' })
    req.user = user;

    res.status(200).send({user:user})
  })
}

module.exports = {
  signUp,
  signIn,
  readByEmail,
  readAll
}
