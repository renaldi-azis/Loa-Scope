/**
 * @description Define API Routes
 */

/** Dependencies */

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');

// Root API Router
const apiRouter = require('express').Router();

// Import Sub API Routers
const authApiRouter = require('./auth');
