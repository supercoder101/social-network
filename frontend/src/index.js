import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import { createApolloClient } from 'utils/apollo-client';
import { StoreProvider } from 'store';

import 'normalize.css';
import theme from 'theme';

import App from 'components/App/App';

// Create a Apollo client
const API_URL = process.env.REACT_APP_API_URL;
const WEBSOCKET_API_URL = process.env.REACT_APP_WEBSOCKET_API_URL;
const apolloClient = createApolloClient(API_URL, WEBSOCKET_API_URL);

render(
  <ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
