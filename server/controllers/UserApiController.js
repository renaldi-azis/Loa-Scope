/**
 * @description User API Controller
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const { User } = require('../database/models');
const { USER_ROLES } = require('../constants');

