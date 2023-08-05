const { USER_ROLES } = require('../constants');

exports.isAuthorizedMobile = (req, res, next) => {
  if (req.headers['authorization'] !== process.env.ANDROID_API_TOKEN) {
// Temp comment
    return res.status(403).json({ message: 'Unauthorized mobile device.' });
