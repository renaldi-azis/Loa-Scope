'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      device_id: {
        type: Sequelize.STRING,
      },
      patient_id: {
