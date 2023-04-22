const mongoose = require("mongoose");
const validations = require("../utils/validations");
const Schema = mongoose.Schema;

const trackSchema = new Schema(
  {
    name: {
      type: String,
      required: "Track name is required",
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
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Track = mongoose.model("Track", trackSchema);
module.exports = Track;
