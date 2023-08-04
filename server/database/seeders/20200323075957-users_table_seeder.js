// Temp comment
'use strict';

const bcrypt = require('bcrypt');

const { USER_ROLES } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
