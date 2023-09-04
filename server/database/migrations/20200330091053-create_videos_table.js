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
        defaultValue: 0,
      },
