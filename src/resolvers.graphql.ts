type Link = {
  id: String;
  description: String;
  url: String;
};

let links: Array<Link> = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;

const rootValue: object = {
  Query: {
    info: () => `This is the API for hackernoon`,
    feed: () => links
  },
  Mutation: {
    createLink: (parent, args): Link => {
      const link: Link = {
        id: `link-${idCount++}`,
        url: args.url,
        description: args.description
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args): Link => {
      let item: Link;
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === args.id) {
          if (args.url) links[i].url = args.url;
          if (args.description) links[i].description = args.description;
          item = links[i];
        }
      }
      return item;
    },
    deleteLink: (parent, args): Link => {
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === args.id) {
          let item: Link = links[i];
          links.splice(i, 1);
          return item;
        }
      }
    }
  }
};

module.exports = rootValue;
