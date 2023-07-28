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
// Temp comment
const searchTests = async (req, res, next) => {
