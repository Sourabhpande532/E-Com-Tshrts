const User = require("../models/user");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");

exports.signup = BigPromise(async (req, res, next) => {
  // UPLOAD IMAGE
  let result;
  if (req.files) {
    let file = req.files.photo;
    result = await cloudinary.v2.uploader.upload(file, {
      folder: "users",
      width: 150,
      crop: "scale",
    });
  }

  // INVITE FIELD
  const { name, email, password } = req.body;

  // EXITS,OR NOT
  if (!email || !name || !password) {
    return next(new CustomError("Name,email,password are required!", 400));
  }

  // NEW ENTRY ON DB
  const user = await User.create({
    name,
    email,
    password,
    photo: {
      id: result.public_id,
      secure_url: result.secure_url,
    },
  });

  cookieToken(user, res);
});