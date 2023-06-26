require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//SWAGGER DOCUMENTATION
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yamljs");
const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//MORGAN MIDDLEWARE
const morgan = require("morgan");
app.use(morgan("tiny"));

//COOKIES AND FILE-UPLOAD MIDDLEWARE
app.use(cookieParser());
app.use(fileUpload());

//REGULAR MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// BRINGS ROUTES
const home = require("./routes/home");

// USING MIDDLEWARE
app.use("/api/v1", home);

module.exports = app;
