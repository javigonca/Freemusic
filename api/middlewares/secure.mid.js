const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/user.model");

module.exports.removeId = (req, res, next) => {
  // protect _id from being sent
  if (req.body) {
    delete req.body._id;
  }
  next();
};

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // "Bearer TOKEN"

  if (!token) {
    return next(createError(401, "Missing token"));
  }
  try {
    const decoded = jwt.verify(token, "supersecret");
    User.findById(decoded.sub)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(createError(401, "User not found"));
        }
      })
      .catch(next);
  } catch (err) {
    next(createError(401, "Invalid token"));
  }
};
