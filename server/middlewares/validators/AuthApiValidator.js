/**
 * @description Auth API Validator
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 */
const login = async (req, res, next) => {
  const reqData = _.pick(req.body, ['username', 'password']);
  // Validate request
