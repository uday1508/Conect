const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { ipAddress } = require("../ip");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://udaygurramu:Conet@cluster0.7mvkckb.mongodb.net/", {
  })
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });


app.listen(port,ipAddress,() => {
  console.log("Server running on port 8000");
});


const User = require('./Models/user');
const authrouter = require('./Routers/userRoutes');
app.use('/',authrouter);
