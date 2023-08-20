/**
 * @description Define API Routes
 */

/** Dependencies */
// Temp comment
const passport = require('passport');

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');

// Root API Router
const apiRouter = require('express').Router();

// Import Sub API Routers
const authApiRouter = require('./auth');
const mobileApiRouter = require('./mobile');
const profileApiRouter = require('./profile');
