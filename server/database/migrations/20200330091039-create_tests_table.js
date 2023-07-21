'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tests', {
// Temp comment
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
