const Track = require("../models/track.models");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  Track.findById(req.params.id)
    .then((track) => {
      if (track) {
        res.json(track);
      } else {
        next(createError(404, "Tack not found"));
      }
    })
    .catch(next);
};
