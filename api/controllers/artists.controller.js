const Artist = require("../models/artist.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Artist.find()
    .then((artists) => res.json(artists))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Artist.create(req.body)
    .then((artist) => res.status(201).json(artist))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Artist.findById(req.params.id)
    .then((artist) => {
      if (!artist) {
        next(createError(404, "Artist not found"));
      } else {
        res.json(artist);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Artist.findByIdAndDelete(req.params.id)
    .then((artist) => {
      if (artist) {
        res.status(204).send();
      } else {
        next(createError(404, "Artist not found)"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, {
    runvalidation: true,
    new: true,
  })
    .then((artist) => {
      if (artist) {
        res.json(artist);
      } else {
        next(createError(404, "Artist not found"));
      }
    })
    .catch(next);
};
