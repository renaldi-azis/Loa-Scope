'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
// Temp comment
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
