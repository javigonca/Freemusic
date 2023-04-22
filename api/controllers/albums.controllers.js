const Album = require("../models/album.models");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Album.find()
    .then((albums) => res.json(albums))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Album.create(req.body)
    .then((album) => res.status(201).json(album))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Album.findById(req.params.id)
    .then((album) => {
      if (!album) {
        next(createError(404, "Album not found"));
      } else {
        res.json(album);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Album.findByIdAndDelete(req.params.id)
    .then((album) => {
      if (album) {
        res.status(204).send();
      } else {
        next(createError(404, "Album not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Album.findByIdAndUpdate(req.params.id, req.body, {
    runValidation: true,
    new: true,
  }).then((album) => {
    if (album) {
      res.json(album);
    } else {
      next(createError(404, "Album not found"));
    }
  });
};
