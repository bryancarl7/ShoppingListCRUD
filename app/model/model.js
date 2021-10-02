const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

// Setup our db client to be used for the model
const client = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// Make sure that our db has a model
const db = {};
db.Sequelize = Sequelize;
db.sequelize = client;
db.listItem = require("../config/listItem.model.js")(client, Sequelize);

module.exports = db;