import { Resolver, Mutation, InputType, Field, Arg, Query } from "type-graphql";
import { Task } from "../models/Task";
import TaskSchema from "../models/TaskSchema";

@InputType()
class TaskInput {
  @Field()
  title: String;
  @Field()
  description: String;
  @Field()
  date: String;
  @Field()
  duration: Number;
}

@Resolver(Task)
export class TaskResolver {
  @Query(() => [Task])
  async tasks() {
    const tasks = await TaskSchema.find();
    return tasks;
  }

  @Query(() => Task)
  async task(@Arg("id") id: string) {
    const task = await TaskSchema.findById(id);
    return task;
  }

  @Mutation(() => Task)
  async createTask(@Arg("taskInput") taskInput: TaskInput) {
    const task = await TaskSchema.create(taskInput);
    return task;
  }

  @Mutation(() => Task)
  async deleteTask(@Arg("id") id: string) {
    const task = await TaskSchema.findByIdAndDelete(id);
    return task;
  }

  @Mutation(() => Task)
  async updateTask(
    @Arg("id") id: string,
    @Arg("taskInput") taskInput: TaskInput
  ) {
    const task = await TaskSchema.findByIdAndUpdate(id, {
      title: taskInput.title,
      description: taskInput.description,
      date: taskInput.date,
      duration: taskInput.duration,
    });
    return task;
  }
}
