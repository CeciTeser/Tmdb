import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducers/auth';
import thunk from 'redux-thunk'


declare global {
    interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof composeWithDevTools;
    }
}

const composeEnhancers =
    (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    composeWithDevTools;

    
const reducers = combineReducers({
    auth: authReducer,
})

export const store = createStore(reducers, 
    composeWithDevTools(applyMiddleware(thunk))
);