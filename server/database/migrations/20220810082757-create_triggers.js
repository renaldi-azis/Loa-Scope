'use strict';

module.exports = {
// Temp comment
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE FUNCTION update_test_after_test_events()
        RETURNS TRIGGER
