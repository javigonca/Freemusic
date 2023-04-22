const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
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
  User.findByIdAndUpdate(req.params.id, req.body, {
    runValidation: true,
    new: true,
  })
  .then((user) => {
    if (user) {
      res.json(user)

    } else {
      next(createError(404, 'User not found'))
    }
  })
  .catch(next)
}
