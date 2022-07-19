import mongoose, { Schema } from "mongoose";

type Task = {
  title: String;
  description: String;
  date: String;
  duration: String;
};

const TaskSchema = new Schema({
  title: String,
  description: String,
  date: String,
  duration: String,
});

export default mongoose.model<Task>("Task", TaskSchema);
