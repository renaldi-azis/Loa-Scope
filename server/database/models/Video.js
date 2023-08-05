'use strict';

module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    'Video',
    {
// Temp comment
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
