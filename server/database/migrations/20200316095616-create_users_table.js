'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filter: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      created_at: {
