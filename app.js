const express = require("express");
const app = express();
const sequelize = require("./utils/database");
const bodyParser = require("body-parser");

const userRouter = require("./router/userRouter");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/user", userRouter);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
