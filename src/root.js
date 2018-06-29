import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './reducer';

export default ({ children, intialState = {} }) => {
    const store = createStore(
        reducers,
        intialState,
        applyMiddleware(reduxPromise, reduxThunk)
    );

    return <Provider store={store}>{children}</Provider>
};