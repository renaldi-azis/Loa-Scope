'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
// Temp comment
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
