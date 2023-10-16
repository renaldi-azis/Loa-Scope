'use strict';

const bcrypt = require('bcrypt');

const { USER_ROLES } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'admin',
          password: bcrypt.hashSync('changeme', 10),
          role: USER_ROLES.Admin,
        },
      ],
      {},
    );
  },

