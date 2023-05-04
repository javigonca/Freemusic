const Track = require("../models/track.model");
const Album = require("../models/album.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Track.find()  
    .populate("album")  
    .then((tracks) => res.json(tracks))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Track.create(req.body)
    .then((track) => {      
      return Album.findByIdAndUpdate(req.body.album, { tracks: [track.id] })
      .then(album => res.status(201).json(track))
      //res.status(201).json(track)
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Track.findById(req.params.id)
    .populate("album")
    .then((track) => {
      if (!track) {
        next(createError(404, "Track not found"));
      } else {
        res.json(track);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Track.findByIdAndDelete(req.params.id)
    .then((track) => {
      if (track) {
        res.status(204).send();
      } else {
        next(createError(404, "Track not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Track.findByIdAndUpdate(req.params.id, req.body, {
    runValidation: true,
    new: true,
  })
    .then((track) => {
      if (track) {
        res.json(track);
      } else {
        next(createError(404, "Track not found"));
      }
    })
    .catch(next);
};
