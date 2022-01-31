import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import { usersReducer } from './reducers/users';
import thunk from 'redux-thunk';
import { currentUserReducer } from './reducers/currentUser';
import { itemsReducer } from './reducers/items';
import { itemsListReducer } from './reducers/AddDeleteItems'
import { itemByIdReducer } from './reducers/itemById';
import { videosReducer } from './reducers/videos';




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
    users: usersReducer,
    currentUser: currentUserReducer,
    items: itemsReducer,
    itemsList: itemsListReducer,
    itemById: itemByIdReducer,
    video: videosReducer,
})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);