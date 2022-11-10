import mongoose from 'mongoose'

const TaskModel = new mongoose.Schema(
  {
    _id:{
      type: Number,
    },
    taskname: {
      type: String,
    },
    isdone:{
      type: String
    }
  }
);

export default mongoose.model("Task", TaskModel);
