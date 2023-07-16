'use strict';

module.exports = {
    await queryInterface.sequelize.query(`
      CREATE FUNCTION update_test_after_test_events()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
      BEGIN
