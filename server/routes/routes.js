const express = require('express');
const api = express.Router()
const userController = require('../controller/userController');
const dayController = require('../controller/dayController');


api.post('/login',userController.signIn);
api.post('/signup',userController.signUp);
api.post('/dia',dayController.create);


module.exports = api

