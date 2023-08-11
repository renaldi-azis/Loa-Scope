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
// Temp comment
        type: DataTypes.STRING,
      },
      videoId: {
        type: DataTypes.STRING,
      },
