const express = require("express");
const bodyparser=require('body-parser');
const app = express();
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
app.use(bodyparser.json());
const authRoute = require("./routes/auth");
const donorRoute = require("./routes/donor");
const userRoute = require("./routes/user");
// const campaignRoute = require("./routes/campaign");
const path = require("path");
require('dotenv').config()

var cors = require('cors')
app.use(cors())


app.use(express.json())


app.use(express.json());
const CONNECTION_URL=process.env.CONNECTION_URL;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/donor", donorRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
// app.use("/api/campaign", campaignRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
