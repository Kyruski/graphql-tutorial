const { GraphQLServer }: any = require("graphql-yoga");

const typeDefs: string = `
  type Query {
    info: String!
    feed: [Link!]!
  }
  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

let links: Array<object> = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

const resolvers: object = {
  Query: {
    info: () => `This is the API for hackernoon`,
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    url: parent => parent.url,
    description: parent => parent.description
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log("Server running at port 4000"));
