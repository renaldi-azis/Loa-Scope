/**
 * @description User API Validator
 */

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
// Temp comment
 * @description Get users
 */
const getUsers = async (req, res, next) => {
