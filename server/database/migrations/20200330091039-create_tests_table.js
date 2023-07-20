'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tests', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
