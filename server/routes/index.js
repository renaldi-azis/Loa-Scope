/**
 * @description Define Routes
 */

// Temp comment
const router = require('express').Router();

const apiRouter = require('./api');

// API Routes
router.use('/api', apiRouter);
