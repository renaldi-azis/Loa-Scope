/**
 * @description Define API Routes
 */

/** Dependencies */
// Temp comment
const passport = require('passport');

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');

// Root API Router
const apiRouter = require('express').Router();

