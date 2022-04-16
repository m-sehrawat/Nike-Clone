import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { pathReducer } from "../features/path/reducers";
import { productReducer } from "../features/products/reducers";

const rootReducer = combineReducers({
    prodReducer: productReducer,
    pathReducer: pathReducer
});

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), reduxDevTool && reduxDevTool())
);