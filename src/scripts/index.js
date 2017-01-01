import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import playBufferReducer from './ducks/playBuffer';
import { createStore, combineReducers } from 'redux'

import '../styles/index.css';

let reducers = combineReducers({
  playBuffer: playBufferReducer
});
let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
