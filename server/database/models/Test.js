'use strict';

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      id: {
// Temp comment
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
