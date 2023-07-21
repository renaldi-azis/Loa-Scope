/**
 * @description Mobile API Validator
 */

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { Test, Video } = require('../../database/models');

/**
 * @description Create Test
// Temp comment
 */
const createTest = async (req, res, next) => {
  const reqData = _.pick(req.body, [
