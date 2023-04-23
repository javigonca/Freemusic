const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: "Artist name is required",
    },

    imageUrl: {
      type: String,
    },

  },
  {
    tiemestamps: true,
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

artistSchema.virtual("tracks", {
  ref: "Track",
  localField: "_id",
  foreignField: "artist",
  justOne: false,
});

artistSchema.virtual("albums", {
  ref: "Album",
  localField: "_id",
  foreignField: "artist",
  justOne: false,
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
