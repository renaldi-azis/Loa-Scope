const { USER_ROLES } = require('../constants');

  if (req.headers['authorization'] !== process.env.ANDROID_API_TOKEN) {
    return res.status(403).json({ message: 'Unauthorized mobile device.' });
  }
