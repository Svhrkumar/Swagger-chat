import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userChatReducer, useSearchReducer } from './reducer';

export const initialState = {};

const reducer = combineReducers({
	userChatDetails: userChatReducer,
	userSearchDetails: useSearchReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
