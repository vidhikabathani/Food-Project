import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import User from "./reducer/User";
import { Products } from "./reducer/Products";

const Combine = combineReducers({
    UserReducer: User,
    ProductReducer:Products
})

export const Store = legacy_createStore(Combine, applyMiddleware(thunk))