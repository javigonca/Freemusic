const User = require("../models/user.model");
const createError = require("http-errors");
const mailer = require("../config/mailer.config");
const jwt = require("jsonwebtoken");

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  delete req.body.confirm;
  User.create(req.body)
    .then((user) => {
      mailer.sendConfirmationEmail(user);
      res.status(201).json(user);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        next(createError(404, "User not found"));
      } else {
        res.json(user);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user) {
        res.status(204).send();
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  delete req.body.confirm;
  User.findByIdAndUpdate(req.params.id, req.body, {
    runValidation: true,
    new: true,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.confirm = (req, res, next) => {
  req.user.confirm = true;

  req.user
    .save()
    .then((user) => {
      res.redirect(`${process.env.WEB_URL}/login`);
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return next(createError(401, "Invalid credentials"));
      }
      if (!user.confirm) {
        return next(createError(401, "Please confirm your account"));
      }
      user.checkPassword(req.body.password).then((match) => {
        if (!match) {
          return next(createError(401, "Invalid credentials"));
        }
        const token = jwt.sign({ sub: user.id }, "supersecret");
        res.json({ token });
      });
    })
    .catch(next);
};
