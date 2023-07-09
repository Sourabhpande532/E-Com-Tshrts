require("dotenv").config();
const app = require("./app");
const connectWithDb = require("./config/db");
const cloudinary = require("cloudinary");

// CONNECT TO DATABASE
connectWithDb();

// CLOUDINARY CONFIG
cloudinary.config({
  clound_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_key: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening on port http://localhost:${process.env.PORT}/api/v1`
  );
});
