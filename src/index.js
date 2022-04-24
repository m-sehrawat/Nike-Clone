import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/store';
import App from './App';

// axios.defaults.baseURL = "http://localhost:3004";
axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

