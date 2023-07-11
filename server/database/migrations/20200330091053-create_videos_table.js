'use strict';

  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
      id: {
