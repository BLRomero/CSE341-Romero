const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.getName);
routes.get('/awesome', myController.getAnotherName);

module.exports =  routes;