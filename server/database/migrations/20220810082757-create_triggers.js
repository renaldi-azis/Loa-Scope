'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE FUNCTION update_test_after_test_events()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
      BEGIN
        IF (TG_OP = 'INSERT') THEN
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
        END IF;
        RETURN NULL;
        END;
      $$;
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER after_test_insert
        AFTER INSERT ON tests FOR EACH ROW
        EXECUTE PROCEDURE update_test_after_test_events();
    `);
    await queryInterface.sequelize.query(`
      CREATE FUNCTION update_test_after_video_events()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
      BEGIN
        IF (TG_OP = 'INSERT') THEN
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
        END IF;
        IF (TG_OP = 'UPDATE') THEN
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = OLD.test_id) WHERE test_id = OLD.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = OLD.test_id) WHERE test_id = OLD.test_id;
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = NEW.test_id) WHERE test_id = NEW.test_id;
        END IF;
        IF (TG_OP = 'DELETE') THEN
          UPDATE tests SET video_count = (SELECT COUNT(id) FROM videos WHERE test_id = OLD.test_id) WHERE test_id = OLD.test_id;
          UPDATE tests SET total_worm_count = (SELECT SUM(worm_count) FROM videos WHERE test_id = OLD.test_id) WHERE test_id = OLD.test_id;
        END IF;
        RETURN NULL;
        END;
      $$;
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER after_video_insert
        AFTER INSERT ON videos FOR EACH ROW
        EXECUTE PROCEDURE update_test_after_video_events();
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER after_video_update
        AFTER INSERT ON videos FOR EACH ROW
        EXECUTE PROCEDURE update_test_after_video_events();
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER after_video_delete
        AFTER INSERT ON videos FOR EACH ROW
        EXECUTE PROCEDURE update_test_after_video_events();
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP TRIGGER after_video_delete ON videos;');
    await queryInterface.sequelize.query('DROP TRIGGER after_video_update ON videos;');
    await queryInterface.sequelize.query('DROP TRIGGER after_video_insert ON videos;');
    await queryInterface.sequelize.query('DROP FUNCTION update_test_after_video_events;');
    await queryInterface.sequelize.query('DROP TRIGGER after_test_insert ON tests;');
    await queryInterface.sequelize.query('DROP FUNCTION update_test_after_test_events;');
  },
};
