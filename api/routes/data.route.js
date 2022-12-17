const dataRouter = require('express').Router();
const {getData,getAllData} = require('../controller/data.ontroller');

dataRouter.get('/t',getData);
dataRouter.get('/',getAllData);

module.exports = dataRouter