const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const adminRoutes = require("./route/admin");
const userRoutes = require("./route/user");
const appointRoutes = require("./route/appoint");


mongoose
  .connect('mongodb+srv://makalaannamacharya:Makala2000@cluster1.ki7leqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("i came here"));

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/access", adminRoutes);
app.use("/user",userRoutes);
app.use("/appoint",appointRoutes);

const port = process.env.PORT || 4000;
console.log("err.......", process.env.DATABASE);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
  