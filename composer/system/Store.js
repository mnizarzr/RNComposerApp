import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducers from '../reducers'

const middlewares = [thunk]

if (__DEV__) {
    middlewares.push(logger);
}


export default createStore(rootReducers, applyMiddleware(...middlewares));