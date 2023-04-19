const mongoose = require("mongoose");
const validations = require("../utils/validations");
const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    name: {
      type: String,
      require: "Album name is required",
    },

    artist: {},

    songs: [{}],

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

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
