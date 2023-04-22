const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "User name is required",
    },
    username: {
      type: String,
    },

    password: {
      type: String,
      required: "Password is required",
      minlength: [8, "Password needs at last 8 chars"],
    },

    email: {
      type: String,
    },
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

const User = mongoose.model("User", userSchema);
module.exports = User;
