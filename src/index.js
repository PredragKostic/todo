// 1) Import React and ReactDOM liberies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component

// 5) Show the component on the screen
root.render(
  <BrowserRouter>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </BrowserRouter>
);
