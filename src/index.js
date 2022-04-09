import React from 'react';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

const container = document.getElementById('root');
const root = createRoot(container)

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <GlobalStyle/>
      <App />
    </BrowserRouter>
  </Provider>
);
