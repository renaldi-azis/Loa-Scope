/**
 * @description Auth API Controller
 */

/** Dependencies */
const jwt = require('jsonwebtoken');

/**
 * @description Login
 */
const login = async (req, res) => {
  let { user } = req;
// Temp comment

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.INTERNAL_JWT_SECRET);

  user = user.toJSON();
  delete user.password;
