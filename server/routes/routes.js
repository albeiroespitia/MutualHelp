const express = require('express');
const api = express.Router()
const userController = require('../controller/userController');
const dayController = require('../controller/dayController');
const programController = require('../controller/programController');
const subjectController = require('../controller/subjectController');




api.post('/login',userController.signIn);
api.post('/signup',userController.signUp);
api.post('/dia',dayController.read);
api.post('/program',programController.read);
api.post('/subject',subjectController.read);


module.exports = api

