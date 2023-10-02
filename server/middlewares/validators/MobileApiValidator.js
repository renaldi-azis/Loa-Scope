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
    lat: Joi.number().optional().allow(null).label('Latitude'),
    lng: Joi.number().optional().allow(null).label('Longitude'),
    location: Joi.string().optional().allow(null).label('Location'),
    createdAt: Joi.string().required().label('Created At'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Check test existence
  let test = await Test.findOne({
    where: {
      testId: value.testId,
    },
  });
  if (test) {
    return res.status(422).json({ message: 'Test already synced.' });
  }

  req.reqData = value;
  next();
};

/**
 * @description Create Video
 */
const createVideo = async (req, res, next) => {
  const reqData = _.pick(req.body, [
    'testId',
    'videoId',
    'videoNumber',
    'videoPath',
    'videoUrl',
    'videoSize',
    'wormCount',
    'createdAt',
  ]);
  // Validate request
  const schema = Joi.object({
    testId: Joi.string().required().label('Test ID'),
    videoId: Joi.string().required().label('Video ID'),
    videoNumber: Joi.number().required().label('Video Number'),
    videoPath: Joi.string().required().label('Video Path'),
    videoUrl: Joi.string().required().label('Video Url'),
    videoSize: Joi.number().required().label('Video Size'),
    wormCount: Joi.number().required().label('Worm Count'),
    createdAt: Joi.string().required().label('Created At'),
  });
