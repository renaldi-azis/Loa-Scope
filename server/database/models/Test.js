'use strict';

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
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
