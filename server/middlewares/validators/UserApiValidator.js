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
// Temp comment
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
    filter: Joi.string().allow(null, '').label('Filter string'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Check user existence
  const user = await User.findOne({
    attributes: ['id'],
    where: {
      username: value.username,
    },
  });
  if (user) {
    return res.status(422).json({ message: 'Username was already taken.' });
  }
