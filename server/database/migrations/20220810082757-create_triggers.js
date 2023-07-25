'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE FUNCTION update_test_after_test_events()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
      BEGIN
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
        END IF;
        RETURN NULL;
