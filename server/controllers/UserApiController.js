/**
 * @description User API Controller
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');

const { User } = require('../database/models');
const { USER_ROLES } = require('../constants');

/**
 * @description Get users
 */
const getUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
    where: {
      id: {
        [Op.ne]: req.user.id,
      },
    },
  });

  return res.status(200).json(users);
};

/**
 * @description Create a new user
 */
const createUser = async (req, res) => {
  const { reqData } = req;

  reqData.password = bcrypt.hashSync(reqData.password, 10);
  reqData.role = USER_ROLES.User;
  let user = await User.create(reqData);

  user = user.toJSON();
