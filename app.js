require("dotenv").config();
const express = require('express')
const app = express()

// Ref: ✈️🔗https://expressjs.com/en/5x/api.html#router

// BRINGS ROUTES 
const home = require("./routes/home");

// USING MIDDLEWARE
app.use("/api/v1",home);

module.exports = app;