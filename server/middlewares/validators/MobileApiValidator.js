/**
 * @description Mobile API Validator
 */

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { Test, Video } = require('../../database/models');

/**
 * @description Create Test
 */
  const reqData = _.pick(req.body, [
    'deviceId',
    'patientId',
    'testId',
