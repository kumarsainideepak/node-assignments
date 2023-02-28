var express = require('express');
var app = express();

const appLoader = require('./src/loaders/appLoader');

const router = require('./src/routers');

appLoader(app, router);