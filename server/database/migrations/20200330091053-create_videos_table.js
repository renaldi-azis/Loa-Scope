'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
