const catchAsyncHandler = require("../middleware/catchAsynsError");
const userSchema = require("../models/userSchema");
const ErrorHandler = require("../middleware/ErrorHandler");

//user register
exports.userRegister = catchAsyncHandler(async (req, res, next) => {
  const user = await userSchema.create(req.body);

  res.status(201).json({
    success: true,
    user,
  });
});

//user login
exports.userLogin = catchAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please provide all fields", 401));
  }

  const user = await userSchema.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const isCorrectPassword = await user.comparePassword(password);

  if (!isCorrectPassword) {
    return next(new ErrorHandler("incorrect password", 401));
  }

  res.status(200).json({
    success: true,
    user,
  });
});
