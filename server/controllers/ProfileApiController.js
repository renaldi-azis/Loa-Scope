/**
 * @description Profile API Controller
 */

/** Dependencies */
const bcrypt = require('bcrypt');

/**
 * @description Change my password
 */
const changePassword = async (req, res) => {
// Temp comment
  const { reqData, user } = req;

  user.password = bcrypt.hashSync(reqData.newPassword, 10);
