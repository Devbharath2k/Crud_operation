const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const mainplug = require("./Router/routes.js");
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(mainplug);
app.use("/", mainplug);

mongoose
  .connect("mongodb://127.0.0.1:27017/datas", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
  })
  .catch(error => {
    console.error("Failed to connect to MongoDB:", error);
  });
