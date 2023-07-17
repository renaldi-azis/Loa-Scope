'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
      CREATE FUNCTION update_test_after_test_events()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
      BEGIN
