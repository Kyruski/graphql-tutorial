const { GraphQLServer }: any = require("graphql-yoga");

let links: Array<object> = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;

const resolvers: object = {
  Query: {
    info: () => `This is the API for hackernoon`,
    feed: () => links
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        url: args.url,
        description: args.description
      };
      links.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
});
server.start(() => console.log("Server running at port 4000"));
