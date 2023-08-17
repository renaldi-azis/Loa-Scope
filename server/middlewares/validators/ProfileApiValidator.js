/**
 * @description Profile API Validator

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

/**
 * @description Change my password
 */
const changePassword = async (req, res, next) => {
  const reqData = _.pick(req.body, ['currentPassword', 'newPassword']);
