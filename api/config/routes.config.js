const express = require('express')
const router = express.Router();
const tracks = require('../controllers/tracks.controllers')


router.get('/tracks', tracks.list);
router.post('/tracks', tracks.create);
router.get('/tracks/:id', tracks.detail);
router.delete('/tracks/:id', tracks.delete);
router.patch('/tracks/:id', tracks.update)


module.exports = router;
