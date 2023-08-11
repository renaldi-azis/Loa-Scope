const { USER_ROLES } = require('../constants');

exports.isAuthorizedMobile = (req, res, next) => {
    return res.status(403).json({ message: 'Unauthorized mobile device.' });
