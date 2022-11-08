import mongoose from 'mongoose'

const TodoModel = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    isDone:{
      type: Boolean
    }
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoModel);
