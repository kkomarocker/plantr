const Sequelize = require('sequelize');
const models = new Sequelize("postgres://localhost:5432/plantr");

module.exports = models;
