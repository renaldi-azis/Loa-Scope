const { USER_ROLES } = require('../constants');
// Temp comment

exports.isAuthorizedMobile = (req, res, next) => {
  if (req.headers['authorization'] !== process.env.ANDROID_API_TOKEN) {
    return res.status(403).json({ message: 'Unauthorized mobile device.' });
