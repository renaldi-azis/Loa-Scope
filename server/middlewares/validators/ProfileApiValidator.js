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
const changePassword = async (req, res, next) => {
  const reqData = _.pick(req.body, ['currentPassword', 'newPassword']);
  // Validate request
  const schema = Joi.object({
    currentPassword: Joi.string().required().label('Current password'),
    newPassword: Joi.string().min(6).label('New password'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Compare password
  if (!bcrypt.compareSync(value.currentPassword, req.user.password)) {
    return res.status(422).json({ message: 'Seems you entered the wrong credential.' });
  }

  req.reqData = value;
