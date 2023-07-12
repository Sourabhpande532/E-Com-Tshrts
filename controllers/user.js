const User = require("../models/user");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");

// SIGNUP
exports.signup = BigPromise(async (req, res, next) => {
  // UPLOAD IMAGE
  if (!req.files) {
    return next(new CustomError("Photo is required for signup", 400));
  }

  let file = req.files.photo;

  const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: "users",
    width: 150,
    crop: "scale",
  });

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

// SIGNIN
exports.login = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;

  // CHECK FIELDS
  if (!email || !password) {
    return next(
      new CustomError("Invalid Credentials,both field required", 400)
    );
  }

  // !isEXITS ("+password").select("true") DB CHECK
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new CustomError("Invalid Credentials,User Doesn't Exits", 400));
  }
  // CHECK !is_PASSWORD (MATCH)
  const isPasswordCorrect = await user.isValidatedPassword(password);

  if (!isPasswordCorrect) {
    return next(new CustomError("Email & Password Doesn't Match", 400));
  }

  // IF All GOES GOOD SEND TOKEN
  cookieToken(user, res);
});

// LOGOUT
exports.logout = BigPromise(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "LOGOUT SUCCESSFUL",
  });
});
