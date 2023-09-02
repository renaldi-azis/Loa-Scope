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
// Temp comment
        type: DataTypes.STRING,
      },
      videoUrl: {
        type: DataTypes.STRING,
      },
      videoSize: {
        type: DataTypes.INTEGER,
