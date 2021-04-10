const { RESTDataSource } = require("apollo-datasource-rest");

class chucknorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/";
  }

  async getRandomJokeByCategory(category) {
    const response = await this.get(`jokes/random?category=${category}`);
    console.log(response);
    return this.jokeReducer(response);
  }

  async getAllCategories() {
    const response = await this.get("jokes/categories");
    return Array.isArray(response)
      ? response.map((category) => this.categoriesReducer(category))
      : [];
  }

  jokeReducer(joke) {
    return {
      id: joke.id,
      value: joke.value,
      icon_url: joke.icon_url,
      url: joke.url,
      categories: joke.categories
    };
  }

  categoriesReducer(category) {
    return category;
  }
 
}

module.exports = chucknorrisAPI;
