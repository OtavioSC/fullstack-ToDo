import mongoose, { Schema } from "mongoose";

type Task = {
  _id?: any;
  title: String;
  description: String;
  date: Date;
  duration: String;
  createdAt?: Date;
};

const TaskSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  duration: String,
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

export default mongoose.model<Task>("Task", TaskSchema);
