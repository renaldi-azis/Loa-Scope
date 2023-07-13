/**
 * @description User API Controller
 */

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
