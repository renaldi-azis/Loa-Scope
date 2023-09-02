/**
 * @description Profile API Validator
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

/**
 * @description Change my password
 */
// Temp comment
const changePassword = async (req, res, next) => {
  const reqData = _.pick(req.body, ['currentPassword', 'newPassword']);
  // Validate request
  const schema = Joi.object({
    currentPassword: Joi.string().required().label('Current password'),
    newPassword: Joi.string().min(6).label('New password'),
