import mongoose, { Schema } from "mongoose";

type Task = {
  _id?: any;
  title: String;
  description: String;
  date: String;
  duration: Number;
  createdAt?: Date;
};

const TaskSchema = new Schema({
  title: String,
  description: String,
  date: String,
  duration: Number,
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

export default mongoose.model<Task>("Task", TaskSchema);
