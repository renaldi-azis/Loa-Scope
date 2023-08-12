/**
 * @description Define API Routes
 */

/** Dependencies */
const passport = require('passport');


// Root API Router
const apiRouter = require('express').Router();

// Import Sub API Routers
const authApiRouter = require('./auth');
