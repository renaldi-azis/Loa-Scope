'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tests', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
        type: Sequelize.STRING,
      },
      patient_id: {
        type: Sequelize.STRING,
      },
      test_id: {
