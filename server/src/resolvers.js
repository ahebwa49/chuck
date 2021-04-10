module.exports = {
  Query: {
    categories: (_, __, { dataSources }) =>
      dataSources.chucknorrisAPI.getAllCategories(),
    joke: (_, { category }, { dataSources }) =>
      dataSources.chucknorrisAPI.getRandomJokeByCategory(category),
  },
};
