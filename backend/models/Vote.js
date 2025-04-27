const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Elector = require('./Elector');
const Candidate = require('./Candidate');

const Vote = sequelize.define('Vote', {
  electorSerialNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Elector,
      key: 'serialNumber',
    },
  },
  candidateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Candidate,
      key: 'id',
    },
  },
});

module.exports = Vote;
