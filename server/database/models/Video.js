'use strict';

module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    {
      id: {
        type: DataTypes.INTEGER,
