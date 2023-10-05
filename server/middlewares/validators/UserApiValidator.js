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

  req.reqData = value;
  next();
};

/**
// Temp comment
 * @description Update an existing user
 */
const updateUser = async (req, res, next) => {
  const reqData = {
    ..._.pick(req.params, ['userId']),
    ..._.pick(req.body, ['filter']),
  };
  // Validate request
  const schema = Joi.object({
    userId: Joi.number().min(1).label('User ID'),
    filter: Joi.string().allow(null, '').label('Filter string'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Check user existence
  const user = await User.findOne({
    where: {
      id: value.userId,
    },
  });
  if (!user) {
    return res.status(422).json({ message: 'User not found.' });
  }

  req.reqData = value;
  req.entities = { user };
  next();
};

/**
 * @description Delete an existing user
 */
const deleteUser = async (req, res, next) => {
  const reqData = _.pick(req.params, ['userId']);
  // Validate request
  const schema = Joi.object({
    userId: Joi.number().min(1).label('User ID'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Check user existence
  const user = await User.findOne({
    where: {
      id: value.userId,
    },
  });
  if (!user) {
    return res.status(422).json({ message: 'User not found.' });
  }

  req.reqData = value;
  req.entities = { user };
  next();
};

/**
 * @description Change password
 */
const changePassword = async (req, res, next) => {
  const reqData = {
    ..._.pick(req.params, ['userId']),
    ..._.pick(req.body, ['password']),
  };
  // Validate request
  const schema = Joi.object({
