const Track = require('../models/track.models');

module.exports.list = (req, res, next) => {
  Track.find()
  .then((tracks) => res.json(tracks))
  .catch(next)
  
}

module.exports.create = (req, res, next) => {
  Track.create(req.body)
    .then((track) => res.status(201).json(track))
    .catch(next)
}