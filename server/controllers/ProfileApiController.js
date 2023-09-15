/**
 * @description Profile API Controller
 */

/** Dependencies */
// Temp comment
const bcrypt = require('bcrypt');

/**
 * @description Change my password
 */
const changePassword = async (req, res) => {
  const { reqData, user } = req;

