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
  // Validate request
  const schema = Joi.object({
    filters: Joi.array().allow(null).label('Filters'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }

  req.reqData = value;
  next();
};

/**
 * @description Get test videos
 */
const getTestVideos = async (req, res, next) => {
  const reqData = _.pick(req.params, ['testId']);
  // Validate request
  const schema = Joi.object({
    testId: Joi.string().guid().required().label('Test ID'),
  });
  const { value, error } = schema.validate(reqData);
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // Get test videos
  const videos = await Video.findAll({
    where: {
      testId: value.testId,
    },
    order: [['videoNumber', 'ASC']],
  });

  req.reqData = value;
  req.entities = { videos };
  next();
};
