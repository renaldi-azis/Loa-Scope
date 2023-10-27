/**
 * @description Define API Routes
 */

/** Dependencies */
const passport = require('passport');

const { isAuthorizedMobile, isAdmin } = require('../../middlewares/AppMiddleware');

// Root API Router
const apiRouter = require('express').Router();

// Import Sub API Routers
const authApiRouter = require('./auth');
const mobileApiRouter = require('./mobile');
const profileApiRouter = require('./profile');
const testApiRouter = require('./tests');
const userApiRouter = require('./users');

// Add API Routes
apiRouter.use('/auth', authApiRouter);
apiRouter.use('/mobile', isAuthorizedMobile, mobileApiRouter);

/** Add JWT Middleware */
apiRouter.use(passport.authenticate('jwt-header', { session: false }));

apiRouter.use('/profile', profileApiRouter);
apiRouter.use('/tests', testApiRouter);

/** Add Admin Middleware */
apiRouter.use(isAdmin);

apiRouter.use('/users', userApiRouter);
