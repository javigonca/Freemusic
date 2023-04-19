const mongoose = require("mongoose");
const validations = require("../utils/validations");
const Schema = mongoose.Schema;

const trackSchema = new Schema(
  {
    name: {
      type: String,
      require: "Track name is required",
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

const Track = mongoose.model("Track", trackSchema);
module.exports = Track;
