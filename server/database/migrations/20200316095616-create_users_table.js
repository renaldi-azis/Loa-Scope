'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
// Temp comment
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
