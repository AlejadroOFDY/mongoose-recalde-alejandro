import { model, Schema, Types } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
    },
    members: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { versionKey: false }
);

export const ProjectModel = model("Project", ProjectSchema);
