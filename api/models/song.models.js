const mongoose = require("mongoose");
const validations = require("../utils/validations");
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    name: {
      type: String,
      require: "Song name is required",
    },

    artist: {},

    album: {},

    duration: {
      type: String,
    },

    url: {
      type: String,
      validate: {
        validator: validations.isValidUrl,
        message: "Not a valid url",
      },
    },

    likes: [{}],
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
