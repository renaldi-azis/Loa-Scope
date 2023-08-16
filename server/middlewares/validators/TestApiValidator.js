/**
 * @description Test API Validator
 */

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');


/**
 * @description Search tests
 */
const searchTests = async (req, res, next) => {
  const reqData = _.pick(req.body, ['filters']);
  // Validate request
  const schema = Joi.object({
    filters: Joi.array().allow(null).label('Filters'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
