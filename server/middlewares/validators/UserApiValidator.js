/**
 * @description User API Validator
 */

/** Dependencies */
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 * @description Get users
 */
const getUsers = async (req, res, next) => {
