const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: "Artist name is required",
    },

    albums: [{}],
  },
  { tiemestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
