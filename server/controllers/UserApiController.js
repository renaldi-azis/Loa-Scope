/**
 * @description User API Controller
 */

/** Dependencies */
const _ = require('lodash');
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
