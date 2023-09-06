'use strict';

module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    'Video',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      testId: {
      },
      videoId: {
        type: DataTypes.STRING,
      },
      videoNumber: {
        type: DataTypes.INTEGER,
      },
      videoPath: {
        type: DataTypes.STRING,
      },
      videoUrl: {
        type: DataTypes.STRING,
      },
      videoSize: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
