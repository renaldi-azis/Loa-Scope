/**
 * @description Uses passport.js to authenticate a user
 */

/** Dependencies */
const passport = require('passport');
const passportJWT = require('passport-jwt');

const { User } = require('../database/models');

/** Setup JSON Webtoken Strategy */
passport.use(
  new passportJWT.Strategy(
    {
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
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

/** Define how Passport should serialize a user */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/** Define how Passport should deserialize a user */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

