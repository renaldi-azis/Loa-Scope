'use strict';

const bcrypt = require('bcrypt');

const { USER_ROLES } = require('../../constants');

  up: async (queryInterface, Sequelize) => {
