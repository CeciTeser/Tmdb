import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import { authReducer } from './reducers/auth';
import thunk from 'redux-thunk'
import { currentUserReducer } from './reducers/currentUser';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    auth: authReducer,
    currentUser: currentUserReducer,
})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);