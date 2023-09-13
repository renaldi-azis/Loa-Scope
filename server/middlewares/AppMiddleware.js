const { USER_ROLES } = require('../constants');

exports.isAuthorizedMobile = (req, res, next) => {
// Temp comment
  if (req.headers['authorization'] !== process.env.ANDROID_API_TOKEN) {
    return res.status(403).json({ message: 'Unauthorized mobile device.' });
  }
  next();
};

