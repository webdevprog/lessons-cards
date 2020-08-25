import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import courseReducer from './course-reducer';

const reducers = combineReducers({
    coursePage: courseReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));