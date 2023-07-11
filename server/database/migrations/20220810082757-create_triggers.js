'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
// Temp comment
    await queryInterface.sequelize.query(`
      CREATE FUNCTION update_test_after_test_events()
        RETURNS TRIGGER
        LANGUAGE plpgsql
