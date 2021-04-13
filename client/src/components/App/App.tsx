import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import logo from '../../images/chucknorris.png';
import Categories from '../Categories/Categories';
import './App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} alt="chucknorris" width="300" height="300" />
        <Categories />
      </div>
    </ApolloProvider>
  );
};

export default App;
