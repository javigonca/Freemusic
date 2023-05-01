const mongoose = require("mongoose");
const validations = require("../utils/validations");
const Schema = mongoose.Schema;

const trackSchema = new Schema(
  {
    name: {
      type: String,
      required: "Track name is required",
    },

    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },

    duration: {
      type: String,
    },

    url: {
      type: String,
      /*validate: {
        validator: validations.isValidUrl,
        message: "Not a valid url",
      },
      unique: true,*/
      //required: "URL is required",
    },
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

trackSchema.virtual("album", {
  ref: "Album",
  localField: "_id",
  foreignField: "tracks",
  justOne: false,
});

trackSchema.virtual("like", {
  ref: "Like",
  localField: "_id",
  foreignField: "like",
  justOne: false,
});

const Track = mongoose.model("Track", trackSchema);
module.exports = Track;
