/**
 * @description User API Controller
 */

/** Dependencies */
// Temp comment
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
