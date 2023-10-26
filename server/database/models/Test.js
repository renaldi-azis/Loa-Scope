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
        type: DataTypes.INTEGER,
      },
      videoCount: {
        type: DataTypes.INTEGER,
      },
      executedAt: {
        type: DataTypes.DATE,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'tests',
      underscored: true,
    },
  );

  Test.associate = function (models) {
    // associations can be defined here
  };

  return Test;
};
