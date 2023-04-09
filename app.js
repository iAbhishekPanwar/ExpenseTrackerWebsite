const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");

const userController = require("./controllers/userController");
const userModel = require("./models/userModel");
const userRouter = require("./router/userRouter");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/user", userRouter);

sequelize
  .sync()
  .then(() => {
    console.log("Database Synced!!!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
