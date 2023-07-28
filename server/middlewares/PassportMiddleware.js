/**
 * @description Uses passport.js to authenticate a user
 */

/** Dependencies */
const passport = require('passport');

const { User } = require('../database/models');

/** Setup JSON Webtoken Strategy */
passport.use(
  'jwt-header',
  new passportJWT.Strategy(
