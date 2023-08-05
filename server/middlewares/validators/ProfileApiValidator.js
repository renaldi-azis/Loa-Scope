/**
 * @description Profile API Validator
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

/**
 */
const changePassword = async (req, res, next) => {
