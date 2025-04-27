const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const PollingStation = require('./PollingStation');

const Vote = require('./Vote');

const Elector = sequelize.define('Elector', {
  serialNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pollingStationId: {
    type: DataTypes.INTEGER,
    references: {
      model: PollingStation,
      key: 'id',
    },
  },
});

module.exports = Elector;
