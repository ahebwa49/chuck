const { gql } = require("apollo-server");

const typeDefs = gql`
  type Joke {
    id: ID!
    url: String
    icon_url: String
    value: String
    categories: [String]
  }
  type Query {
    categories: [String]
    joke(category: String): Joke
  }
`;
module.exports = typeDefs;
