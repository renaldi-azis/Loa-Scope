/**
 * @description Profile API Controller
 */

const bcrypt = require('bcrypt');

/**
 * @description Change my password
 */
const changePassword = async (req, res) => {
  const { reqData, user } = req;
