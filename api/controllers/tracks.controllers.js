const Track = require('../models/track.models');
const createError = require('http-errors')

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

module.exports.detail = (req, res, next) => {
  Track.findById(req.params.id)
  .then((track) => {
    if (!track) {
      next(createError(404, 'Track not found'));

    } else {
      res.json(track)
    }
  })
  .catch(next)
}