import { Resolver, Mutation, InputType, Field, Arg, Query } from "type-graphql";
import { Task } from "../models/Task";
import TaskSchema from "../models/TaskSchema";

@InputType()
class TaskInput {
  @Field(() => String)
  title: String;
  @Field(() => String)
  description: String;
  @Field(() => String)
  date: String;
  @Field(() => String)
  duration: String;
}

@Resolver(Task)
export class TaskResolver {
  @Query(() => [Task])
  async tasks() {
    const tasks = await TaskSchema.find();
    return tasks;
  }

  @Mutation(() => Task)
  async createTask(@Arg("taskInput") taskInput: TaskInput) {
    const task = await TaskSchema.create(taskInput);
    return task;
  }
}
