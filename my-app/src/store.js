import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { formReducer, todosReducer, changeReducer } from './reducers';

const reducer = combineReducers({
	formState: formReducer,
	todosState: todosReducer,
	changeState: changeReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
