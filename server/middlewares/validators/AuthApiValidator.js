/**
 * @description Auth API Validator
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 * @description Login
 */
const login = async (req, res, next) => {
