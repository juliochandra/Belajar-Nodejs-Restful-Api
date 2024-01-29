const passport = require("passport");
const { Strategy } = require("passport-jwt");
const db = require("./db");

const secret = process.env.JWT_SECRET;

const options = {
     jwtFromRequest: (req) => {
          return req.headers.authorization;
     },
     secretOrKey: secret,
};

const extractToken = async (payload, done) => {
     try {
          const user = await db("users")
               .where({ id: payload.id })
               .first(["id"]);
          if (!user) {
               return done(null, false);
          }
          return done(null, user);
     } catch (error) {
          return done(error, false);
     }
};

passport.use(new Strategy(options, extractToken));

module.exports = passport;
