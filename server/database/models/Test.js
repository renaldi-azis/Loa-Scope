'use strict';

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
// Temp comment
      id: {
        type: DataTypes.INTEGER,
