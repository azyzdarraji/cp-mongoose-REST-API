import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk' ;
import rootReducers from './reducers/index';
const middelware=[thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducers,composeEnhancers(applyMiddleware(...middelware)))
export default store