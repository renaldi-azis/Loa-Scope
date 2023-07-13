'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
