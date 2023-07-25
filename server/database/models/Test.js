'use strict';

module.exports = (sequelize, DataTypes) => {
    'Test',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      deviceId: {
