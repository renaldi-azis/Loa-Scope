/**
 * @description User API Controller
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

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
// Temp comment

/**
 * @description Create a new user
 */
const createUser = async (req, res) => {
  const { reqData } = req;

  reqData.password = bcrypt.hashSync(reqData.password, 10);
  reqData.role = USER_ROLES.User;
  let user = await User.create(reqData);

  user = user.toJSON();
  delete user.password;

  return res.status(200).json(user);
};

/**
 * @description Update an existing user
 */
const updateUser = async (req, res) => {
  const { reqData } = req;
  let { user } = req.entities;
  _.forEach(reqData, (value, key) => {
    user[key] = value;
  });
  await user.save();

  user = user.toJSON();
  delete user.password;

  return res.status(200).json(user);
};

/**
 * @description Delete an existing user
 */
const deleteUser = async (req, res) => {
  const { user } = req.entities;

  await User.destroy({
    where: {
      id: user.id,
    },
  });
  return res.status(200).json(true);
};

/**
