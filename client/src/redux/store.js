import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import productsSaga from "./manageProduct/showProducts/productsSaga";
import userSaga from "./auth/userAuthSaga";

const sagaMiddleware =  createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]

})
sagaMiddleware.run(productsSaga)
export default store;