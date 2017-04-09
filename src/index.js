import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
// import rootReducer from './reducers/index';
import './index.css';

//we create the store and make it available to our app through Provider.
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const store = applyMiddleware(promise)(createStore);


ReactDOM.render(
  // <Provider store={store(rootReducer)}>
    <App />,
  // {/* </Provider>, */}
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
