const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "usuario",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 4460,
  }
);

module.exports = {
  sequelize,
  DataTypes,
  Model,
};
