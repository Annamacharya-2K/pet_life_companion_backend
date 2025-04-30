const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res, next) => {
  const { username, password } = req.body;
  const userNameExist = await Admin.findOne({ username });
  if (!userNameExist) {
    return res.status(400).json({
      success: false,
      message: "Username does not exist",
    });
  }
  try {
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password cannot be empty",
      });
    }
    if (userNameExist && userNameExist.password === password) {
      const token = jwt.sign(
        {
          username: userNameExist.username,
        },
        "secret",
        {
          expiresIn: "24h",
        }
      );
      res.status(200).json({
        message: "Success",
        username: userNameExist.username,
        token: token,
        name: userNameExist.name,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Password. Please try again",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.signup = async (req, res, next) => {
  try {
    const { firstname,
      lastname,
      username,
      password,
      mailid,
      phoneno } = req.body;

    // Check if user already exists
    const existingUser = await Admin.findOne({ mailid });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }


    // Create new user
    const newUser = new Admin({
      firstname,
      lastname,
      username,
      password,
      mailid,
      phoneno
    });

    // Save user to database
    await newUser.save();

    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}