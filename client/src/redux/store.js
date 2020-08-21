import { createStore, compose, applyMiddleware } from 'redux';
import storeSynchronize from 'redux-localstore'


import reducer from './reducers/user';

import { save, load } from 'redux-localstorage-simple';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
    save(),
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load(),
    composeEnhancers(),
);

storeSynchronize(store)

export default store;