import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import courseReducer from './course-reducer';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    coursePage: courseReducer,
    form: formReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));