import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true
  },
  last_name: String,
  email: String,
  gender: String,
});

export const userModel = mongoose.model(userCollection, userSchema);
