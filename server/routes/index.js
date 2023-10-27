/**
 * @description Define Routes
 */

const router = require('express').Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

