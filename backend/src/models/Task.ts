import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Task {
  @Field(() => String)
  title: String;
  @Field(() => String)
  description: String;
  @Field(() => String)
  date: String;
  @Field(() => String)
  duration: String;
}

export { Task };
