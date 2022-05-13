const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");

const User = require("./models/users");

mongoose
  .connect("mongodb://mongo:27017/comics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

const cookieSession = require("cookie-session");

const routes = require("./routes");

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["12345", "ABCDE"],
  })
);

app.use("/", routes({}));

app.listen(port, () => {
  console.log(`Marvel Search Engine listening at http://localhost:${port}`);
});
