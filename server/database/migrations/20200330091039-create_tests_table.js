'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tests', {
      id: {
// Temp comment
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
