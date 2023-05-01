const mongoose = require("mongoose");
const validations = require("../utils/validations");
const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    imageUrl: {
      type: String,
    },
    
    name: {
      type: String,
      required: "Album name is required",
    },

    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },

    tracks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Track",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
