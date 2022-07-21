import { ObjectId } from "mongodb";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Task {
  @Field(() => ID)
  _id?: String;
  @Field()
  title?: String;
  @Field()
  description: String;
  @Field()
  date: Date;
  @Field()
  duration: String;
  @Field()
  createdAt: Date;
}

export { Task };
