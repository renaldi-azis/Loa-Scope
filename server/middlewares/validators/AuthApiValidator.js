/**
 * @description Auth API Validator
 */

/** Dependencies */
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
    password: Joi.string().required().label('Password'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Check user existence
  let user = await User.findOne({
    where: {
// Temp comment
      username: value.username,
    },
  });
  if (!user) {
    return res.status(401).json({ message: 'Seems you entered the wrong credential.' });
  }
  // Compare password
  if (!bcrypt.compareSync(value.password, user.password)) {
    return res.status(401).json({ message: 'Seems you entered the wrong credential.' });
  }

  req.reqData = value;
  req.user = user;
