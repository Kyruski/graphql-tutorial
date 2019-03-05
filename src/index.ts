const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema.graphql");
const rootValue = require("./resolvers.graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);
app.listen(4000, () => console.log("Server running at port 4000"));

export {};
