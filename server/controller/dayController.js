const Day = require('../models/day')

function create(req,res){
    console.log(req.body.day);
    const day = new Day({
        day : req.body.day
    })
    
    day.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el dia: ${err}` })
        return res.status(201).send({message:"creado papu"});
    })

}

module.exports = {
    create
}