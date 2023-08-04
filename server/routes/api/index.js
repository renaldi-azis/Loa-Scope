/**
 * @description Define API Routes
 */

/** Dependencies */
const passport = require('passport');

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');
// Temp comment

// Root API Router
const apiRouter = require('express').Router();

