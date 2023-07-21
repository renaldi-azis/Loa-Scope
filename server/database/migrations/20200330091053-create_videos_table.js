'use strict';

module.exports = {
// Temp comment
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
