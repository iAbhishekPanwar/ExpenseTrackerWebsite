const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "expense_tracker_website",
  "root",
  "Waitforit@007",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
