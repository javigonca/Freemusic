const express = require("express");
const router = express.Router();
const tracks = require("../controllers/tracks.controllers");
const albums = require("../controllers/albums.controllers");
const artists = require("../controllers/artists.controller");
const users = require("../controllers/users.controllers");
const likes = require("../controllers/likes.controllers")

router.get("/tracks", tracks.list);
router.post("/tracks", tracks.create);
router.get("/tracks/:id", tracks.detail);
router.post("/tracks/:id/like", likes.toggle)
router.delete("/tracks/:id", tracks.delete);
router.patch("/tracks/:id", tracks.update);


router.get("/albums", albums.list);
router.post("/albums", albums.create);
router.get("/albums/:id", albums.detail);
router.delete("/albums/:id", albums.delete);
router.patch("/albums/:id", albums.update);

router.get("/artists", artists.list);
router.post("/artists", artists.create);
router.get("/artists/:id", artists.detail);
router.delete("/artists/:id", artists.delete);
router.patch("/artists/:id", artists.update);

router.get("/users", users.list);
router.post("/users", users.create);
router.get("/users/:id", users.detail);
router.delete("/users/:id", users.delete);
router.patch("/users/:id", users.update);

module.exports = router;
