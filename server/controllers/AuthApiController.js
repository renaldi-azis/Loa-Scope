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
  const payload = { id: user.id };
