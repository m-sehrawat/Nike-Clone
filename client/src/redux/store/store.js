import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../features/auth/reducer";
import { cartReducer } from "../features/cart/reducer";
import { homeReducer } from "../features/home/reducer";
import { pathReducer } from "../features/path/reducers";
import { prodReducer } from "../features/products/reducers";
import { favouriteReducer } from "../features/favourite/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    prodReducer,
    pathReducer,
    authReducer,
    homeReducer,
    cartReducer,
    favouriteReducer
});


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);