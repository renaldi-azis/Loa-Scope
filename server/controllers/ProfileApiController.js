/**
 * @description Profile API Controller
 */

/** Dependencies */
const bcrypt = require('bcrypt');

/**
 * @description Change my password
 */
  const { reqData, user } = req;

  user.password = bcrypt.hashSync(reqData.newPassword, 10);
  await user.save();

  return res.status(200).json(true);
};

module.exports = {
  changePassword,
