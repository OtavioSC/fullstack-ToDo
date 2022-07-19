import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Task {
  @Field(() => ID)
  _id: any;
  @Field()
  title: String;
  @Field()
  description: String;
  @Field()
  date: String;
  @Field()
  duration: Number;
  @Field()
  createdAt: Date;
}

export { Task };
