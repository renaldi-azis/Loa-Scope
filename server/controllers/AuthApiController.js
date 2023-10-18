/**
 * @description Auth API Controller
 */

/** Dependencies */
const jwt = require('jsonwebtoken');

/**
 * @description Login
 */
  let { user } = req;

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.INTERNAL_JWT_SECRET);

  user = user.toJSON();
  delete user.password;

  return res.status(200).json({ user, token });
