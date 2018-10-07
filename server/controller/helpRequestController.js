const HelpRequest = require('../models/helpRequest');

function create(req,res,next){
    const helpRequest = new HelpRequest({
        user : res.locals.user[0]._id,
        hour : "5bb2843000d8df1d4f0cbdde",
        subject: req.body.asignaturaMalo,
        info : req.body.temasAyuda
    })

    helpRequest.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el helpRequest: ${err}` })
        return res.status(201).send({message:"creado papu"});
    })
}

function readById (req, res, next) {
    console.log(res.locals.user[0]._id);
    HelpRequest.find({user:res.locals.user[0]._id}, (err, helpRequest) => {
        if (err) return res.status(500).send({ message: err })
        if (!helpRequest.length) return res.status(401).send({ message: 'No existe el helpRequest' })
        res.status(200).send({
            message: 'Existe papu',
        })
    })
}

module.exports = {
    create,
    readById
}