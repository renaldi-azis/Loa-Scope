/**
 * @description Auth API Validator
 */

const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 * @description Login
 */
const login = async (req, res, next) => {
  const reqData = _.pick(req.body, ['username', 'password']);
  // Validate request
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
