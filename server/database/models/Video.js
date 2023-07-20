'use strict';

module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    'Video',
    {
// Temp comment
      id: {
        type: DataTypes.INTEGER,
