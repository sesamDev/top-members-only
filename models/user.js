const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, min: 1, max: 100, required: true },
  last_name: { type: String, min: 1, max: 100, required: true },
  email: { type: String, min: 1, max: 100, required: true },
  password: { type: String, min: 1, max: 100, required: true },
  membership_status: { type: String, min: 1, max: 100, required: true },
  admin: { type: Boolean },
});

UserSchema.virtual("url").get(function () {
  return `/user/${this._id}`;
});

UserSchema.virtual("name").get(function () {
  return `${this.last_name}, ${this.first_name}`;
});

module.exports = mongoose.model("User", UserSchema);
