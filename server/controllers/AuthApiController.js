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

