const express = require('express');
const api = express.Router()
const userController = require('../controller/userController');
const dayController = require('../controller/dayController');
const programController = require('../controller/programController');
const subjectController = require('../controller/subjectController');
const collaboratorController = require('../controller/collaboratorsController');
const helpRequestController = require('../controller/helpRequestController');






api.post('/login',userController.signIn);
api.post('/signup',userController.signUp);
api.post('/dia',dayController.read);
api.post('/program',programController.read);
api.post('/subject',subjectController.read);


api.post('/usersAll',userController.readAll);
api.post('/collaboratorsAll',collaboratorController.readSubjectAll);
api.post('/subjectById',subjectController.readById);
api.post('/helpRequestAll',helpRequestController.readAll);



// SET
api.post('/setCollaborator',userController.readByEmail,collaboratorController.create,helpRequestController.create);


api.post('/checkFirstTime',userController.readByEmail,helpRequestController.readById);

module.exports = api
