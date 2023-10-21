'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tests', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      device_id: {
        type: Sequelize.STRING,
      },
      patient_id: {
        type: Sequelize.STRING,
      },
      test_id: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      location: {
        type: Sequelize.STRING,
      },
      total_worm_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      video_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      executed_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
