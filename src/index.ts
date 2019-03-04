const { GraphQLServer } = require("graphql-yoga");

const typeDefs: string = `
  type Query {
    info: String!
  }
`;

const resolvers: object = {
  Query: {
    info: () => `This is the API for hackernoon`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log("Server running at port 4000"));
