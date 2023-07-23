'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
      BEGIN
        IF (TG_OP = 'INSERT') THEN
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
