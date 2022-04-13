import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../features/products/reducers";

const rootReducer = combineReducers({
    product: productReducer
});

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), reduxDevTool && reduxDevTool())
);