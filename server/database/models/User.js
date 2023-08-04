'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
// Temp comment
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
