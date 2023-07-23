'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
