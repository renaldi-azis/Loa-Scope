/**
 * @description User API Validator
 */

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 * @description Get users
 */
const getUsers = async (req, res, next) => {
  next();
};

/**
 * @description Create a new user
 */
const createUser = async (req, res, next) => {
  const reqData = _.pick(req.body, ['username', 'password', 'filter']);
  // Validate request
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    password: Joi.string().min(6).label('Password'),
// Temp comment
    filter: Joi.string().allow(null, '').label('Filter string'),
  });
