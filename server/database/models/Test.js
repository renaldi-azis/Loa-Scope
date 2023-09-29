'use strict';

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      deviceId: {
        type: DataTypes.STRING,
      },
      patientId: {
        type: DataTypes.STRING,
      },
      testId: {
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
      longitude: {
        type: DataTypes.FLOAT,
      },
      location: {
        type: DataTypes.STRING,
      },
      totalWormCount: {
      },
      videoCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      executedAt: {
        type: DataTypes.DATE,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
