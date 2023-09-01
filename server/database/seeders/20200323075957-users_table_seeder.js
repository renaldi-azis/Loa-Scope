'use strict';

const bcrypt = require('bcrypt');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'admin',
          password: bcrypt.hashSync('changeme', 10),
