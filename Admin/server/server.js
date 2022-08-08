const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const donorRoute = require("./routes/donor");
const userRoute = require("./routes/user");
const campaignRoute = require("./routes/campaigns");
const path = require("path");
app.use(express.json())

dotenv.config();
app.use(express.json());
const CONNECTION_URL="";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/donor", donorRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/campaign", campaignRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
