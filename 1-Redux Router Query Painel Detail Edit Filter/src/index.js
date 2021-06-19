import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import './index.css';
import App from './App';


const link = from([
  // errorLink,
  new HttpLink({ uri: 'http://testefront.dev.softplan.com.br/' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);