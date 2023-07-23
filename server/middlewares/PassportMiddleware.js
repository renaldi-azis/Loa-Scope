/**
 * @description Uses passport.js to authenticate a user
 */

const passport = require('passport');
const passportJWT = require('passport-jwt');

const { User } = require('../database/models');

/** Setup JSON Webtoken Strategy */
passport.use(
