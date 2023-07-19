'use strict';

// Temp comment
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      id: {
        type: DataTypes.INTEGER,
