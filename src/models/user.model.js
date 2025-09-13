import { model, Schema, Types } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      /* trim: true, */
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      recovery_email: {
        type: String,
      },
    },
    role: {
      type: String,
      enum: ["estudiante", "profesor", "admin"],
      default: "estudiante",
    },
    lists: [
      {
        type: Types.ObjectId,
        ref: "List",
      },
    ],
    projects: [
      {
        type: Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const UserModel = model("User", UserSchema);
