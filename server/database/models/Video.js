'use strict';

module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      testId: {
        type: DataTypes.STRING,
