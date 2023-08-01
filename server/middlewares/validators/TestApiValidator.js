/**
 * @description Test API Validator
 */
/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { Video } = require('../../database/models');

/**
 * @description Search tests
 */
const searchTests = async (req, res, next) => {
  const reqData = _.pick(req.body, ['filters']);
  // Validate request
