/**
 * @description User API Validator

/** Dependencies */
const _ = require('lodash');
const Joi = require('joi');

const { User } = require('../../database/models');

/**
 * @description Get users
 */
const getUsers = async (req, res, next) => {
  next();
};

/**
 * @description Create a new user
