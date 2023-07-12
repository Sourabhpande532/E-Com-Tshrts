const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 charactors"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validator: [validator.isEmail, "Please enter email in correct format"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide an password"],
    minlength: [4, "password should be atleast 4 char"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  photo: {
    id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//ENCRYPT PASSWORD BEFOUR SAVE  - H.W (On:Testing)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
});

//VALIDATE THE PASSWORD WITH PASSED ON USER PASSWORD - H.W (On:Testing)
userSchema.methods.isValidatedPassword = async function (userSendPassword) {
  return await bcrypt.compare(userSendPassword, this.password);
};

//CREATE AND RETURN JWT TOKEN
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

// GENERATE FORGOT PASSWORD TOKEN (STRING)
userSchema.methods.getForgotPasswordToken = function () {
  // GENERATE A LONG AND RANDOM STRING
  const forgotToken = crypto.randomBytes(20).toString("hex");
  // GETTING A HASH - MAKE SURE TO GET HASH ON backend
  this.forgotPasswordToken = crypto
    .createHash("sha256")
    .update(forgotToken)
    .digest("hex");
  // TIME OF TOKEN
  this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;
  return forgotToken;
};


module.exports = mongoose.model("User", userSchema);

/* 
Ref: @TITLE: CREATING A USER MODEL & VALIDATOR
*/
