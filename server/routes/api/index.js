/**
 * @description Define API Routes
 */

/** Dependencies */
const passport = require('passport');

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');

// Root API Router

// Import Sub API Routers
const authApiRouter = require('./auth');
