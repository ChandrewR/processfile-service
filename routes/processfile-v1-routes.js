/**
 * @name processfile-v1-api
 * @description This module packages the Processfile API.
 */
'use strict';

const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
const ServerResponse = require('fwsp-server-response');
var processfilecontroller = require('../controller/processfilecontroller');

let serverResponse = new ServerResponse();
serverResponse.enableCORS(true);express.response.sendError = function(err) {
  serverResponse.sendServerError(this, {result: {error: err}});
};
express.response.sendOk = function(result) {
  serverResponse.sendOk(this, {result});
};

let api = express.Router();

api.get('/',
(req, res) => {
  res.sendOk({greeting: 'Welcome to Hydra Express!'});
});

api.post('/processfile',processfilecontroller.processfile);
api.get('/getfilestatus',processfilecontroller.getfilestatus);

module.exports = api;
