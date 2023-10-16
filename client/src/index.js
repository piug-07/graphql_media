import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
// import { setContext } from 'apollo-link-context';



const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </ApolloProvider>
);


