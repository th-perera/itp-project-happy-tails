const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");


const viewUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})

  users? res.status(201).json(users) : res.status(400).json({message : "Error"})
})

//register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, address, phone, password, image , role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  let user
  // Create user
  if(role){
     user = await User.create({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
      image: image,
      role: role
    });
  }else{
     user = await User.create({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
      image: image,
    });
  }

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      token: generateToken(user._id),
      role: user.role,
      image: user.image,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      address: user.address,
      phone: user.phone,
      role: user.role,
      image: user.image,
      updatedAt: user.updatedAt,
      createdAt: user.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//get user
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//update user
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.body._id });

  if (!req.body.confirmpassword) {
    res.status(400);
    throw new Error("please enter old password");
  }
  const passmatch = await bcrypt.compare(
    req.body.confirmpassword,
    user.password
  );

  if (user && passmatch) {
    const salt = await bcrypt.genSalt(10);

    let hashedPassword = user.password;
    if (req.body.password) {
      hashedPassword = await bcrypt.hash(req.body.password, salt);
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;
    user.password = hashedPassword;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      phone: updatedUser.phone,
      token: generateToken(updatedUser._id),
      role: updatedUser.role,
    });
  } else {
    res.status(400);
    throw new Error("update failed");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const deletedUser = await user.deleteOne();
    res.json({
      _id: deletedUser.id,
      name: deletedUser.name,
      email: deletedUser.email,
      token: generateToken(deletedUser._id),
      role: deletedUser.role,
      message: "User deleted",
    });
  } else {
    res.status(400);
    throw new Error("delete failed");
  }
});

const updateAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name , email, role } = req.body;

  // Wait for the Feedback model to find the document by ID
  const user = await User.findOne({ _id: id });

  if (user) {
    // Update the feedback document with new values
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    // Save the updated document and wait for it to complete
    await user.save();

    res.status(201).json(user);
  } else {
    res.status(400).json({ message: "Error" });
  }
})

const deleteAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndDelete(id)

  user ? res.status(201).json(user) : res.status(400).json({message : "Error"})
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  viewUsers,
  updateUser,
  deleteUser,
  deleteAdmin,
  updateAdmin
};
