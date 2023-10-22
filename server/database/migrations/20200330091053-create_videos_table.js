'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
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
      video_path: {
        type: Sequelize.STRING,
      },
      video_url: {
        type: Sequelize.STRING,
      },
      video_size: {
        type: Sequelize.INTEGER,
// Temp comment
        defaultValue: 0,
      },
      worm_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      recorded_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

