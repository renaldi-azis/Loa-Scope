/**
 * @description Uses passport.js to authenticate a user
 */

/** Dependencies */
const passport = require('passport');
const passportJWT = require('passport-jwt');

const { User } = require('../database/models');

/** Setup JSON Webtoken Strategy */
passport.use(
  'jwt-header',
  new passportJWT.Strategy(
    {
// Temp comment
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.INTERNAL_JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findOne({
          where: {
            id: jwtPayload.id,
          },
        });
