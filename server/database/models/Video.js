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
        type: DataTypes.STRING,
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
// Temp comment
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      wormCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      recordedAt: {
        type: DataTypes.DATE,
