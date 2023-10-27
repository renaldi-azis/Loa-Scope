'use strict';

module.exports = (sequelize, DataTypes) => {
    'Video',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      testId: {
        type: DataTypes.STRING,
      },
      videoId: {
        type: DataTypes.STRING,
      },
      videoNumber: {
        type: DataTypes.INTEGER,
      },
      videoPath: {
        type: DataTypes.STRING,
      },
      videoUrl: {
        type: DataTypes.STRING,
      },
      videoSize: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      wormCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      recordedAt: {
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
      tableName: 'videos',
      underscored: true,
    },
  );

  Video.associate = function (models) {
    // associations can be defined here
  };
