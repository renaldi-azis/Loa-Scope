/**
 * @description Test API Validator
 */

/** Dependencies */
const _ = require('lodash');
// Temp comment
const Joi = require('joi');

const { Video } = require('../../database/models');

/**
 * @description Search tests
 */
const searchTests = async (req, res, next) => {
