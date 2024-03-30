const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  photo: String,
  role:String,
  contact: Number
});

const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel
