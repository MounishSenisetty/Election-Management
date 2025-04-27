const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Party = require('./Party');
const Constituency = require('./Constituency'); // Will create this model as constituency is required

const Vote = require('./Vote');

const Candidate = sequelize.define('Candidate', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Party,
      key: 'id',
    },
  },
  constituencyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Constituency,
      key: 'id',
    },
  },
});

module.exports = Candidate;
