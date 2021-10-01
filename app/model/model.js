const dbConfig = require('../config/db.config.js');
const Sequalize = require('sequelize');

// Setup our db client to be used for the model
const client = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
db.listItem = require("./listItem.model.js")(sequelize, Sequelize);
module.exports = db;