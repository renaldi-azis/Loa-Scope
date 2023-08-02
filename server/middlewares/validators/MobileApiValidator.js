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
const createTest = async (req, res, next) => {
  const reqData = _.pick(req.body, [
    'deviceId',
    'patientId',
    'testId',
    'lat',
    'lng',
    'location',
    'createdAt',
  ]);
  // Validate request
  const schema = Joi.object({
    deviceId: Joi.string().required().label('Device ID'),
    patientId: Joi.string().required().label('Patient ID'),
    testId: Joi.string().required().label('Test ID'),
