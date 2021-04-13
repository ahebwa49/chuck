const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const chucknorrisAPI = require("./datasources/chucknorris");

// set up any dataSources our resolvers need
const dataSources = () => ({
  chucknorrisAPI: new chucknorrisAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(() => {
  console.log(
    `
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `
  );
});

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  ApolloServer,
  chucknorrisAPI,
  server,
};
