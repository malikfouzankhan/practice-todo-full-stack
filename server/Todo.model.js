import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
      {
            title: String,

            isCompleted: {
              type: Boolean,
              default: false
            }
      },
      { timestamps: true },
);

const todoModel = mongoose.model("Todo", todoSchema);

export default todoModel;