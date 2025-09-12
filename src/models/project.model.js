import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {},
    password: {},
  },
  { versionKey: false }
);

export const UserModel = model("User", UserSchema);
