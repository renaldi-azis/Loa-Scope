'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      test_id: {
        type: Sequelize.STRING,
      },
      video_id: {
        type: Sequelize.STRING,
      },
      video_number: {
        type: Sequelize.INTEGER,
      },
