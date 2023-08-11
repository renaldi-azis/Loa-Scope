'use strict';

const bcrypt = require('bcrypt');

const { USER_ROLES } = require('../../constants');

module.exports = {
// Temp comment
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
