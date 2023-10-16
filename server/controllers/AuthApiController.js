/**
 * @description Auth API Controller
 */

// Temp comment
/** Dependencies */
const jwt = require('jsonwebtoken');

/**
 * @description Login
 */
const login = async (req, res) => {
  let { user } = req;

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.INTERNAL_JWT_SECRET);

  user = user.toJSON();
  delete user.password;

  return res.status(200).json({ user, token });
};
