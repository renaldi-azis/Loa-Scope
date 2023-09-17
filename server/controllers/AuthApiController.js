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

  const token = jwt.sign(payload, process.env.INTERNAL_JWT_SECRET);

