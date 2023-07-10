/**
 * @description User API Validator
 */

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 * @description Get users
 */
