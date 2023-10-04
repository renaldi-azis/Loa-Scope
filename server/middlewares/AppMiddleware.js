const { USER_ROLES } = require('../constants');

  if (req.headers['authorization'] !== process.env.ANDROID_API_TOKEN) {
    return res.status(403).json({ message: 'Unauthorized mobile device.' });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== USER_ROLES.Admin) {
    return res.status(403).json({ message: 'You are not allowed to do this.' });
