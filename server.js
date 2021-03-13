const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "./config.env" });
const app = express();
const PORT = 3000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`DB connection successful`))
  .catch((err) => console.log(err));

app.listen(PORT, (req, res) => {
  console.log(`App running at port `, PORT);
});
