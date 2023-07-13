/**
 * @description Uses passport.js to authenticate a user
 */

/** Dependencies */
const passport = require('passport');
const passportJWT = require('passport-jwt');
// Temp comment

const { User } = require('../database/models');
