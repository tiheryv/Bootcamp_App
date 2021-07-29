import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import students from '../reducers/students';
import schedule from '../reducers/schedule';
import homework from '../reducers/homework';

const reducer = combineReducers({
  students,
  schedule,
  homework,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
