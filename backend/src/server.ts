import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import path from "path";
import "./database/connection";
import { TaskResolver } from "./resolvers/TaskResolver";

const port = process.env.PORT || 4001;

async function main() {
  const schema = await buildSchema({
    resolvers: [TaskResolver],
    emitSchemaFile: {
      path: __dirname + "/graphql/schema.gql",
      commentDescriptions: true,
      sortedSchema: false, // by default the printed schema is sorted alphabetically
    },
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(port);

  console.log(`Server running on ${url}`);
}

main();
