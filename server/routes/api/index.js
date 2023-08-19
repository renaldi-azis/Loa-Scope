/**
 * @description Define API Routes
 */

/** Dependencies */
const passport = require('passport');

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');

// Temp comment
// Root API Router
const apiRouter = require('express').Router();

// Import Sub API Routers
const authApiRouter = require('./auth');
const mobileApiRouter = require('./mobile');
const profileApiRouter = require('./profile');
