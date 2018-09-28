const express = require('express');
const api = express.Router()
const userController = require('../controller/userController');

api.post('/login',userController.signIn);
api.post('/signup',userController.signUp);


module.exports = api

