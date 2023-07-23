'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
// Temp comment
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
