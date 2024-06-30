import { combineReducers } from "redux";
import cartData from "./manageProduct/cart/cartReducer";
import { productsList } from "./manageProduct/showProducts/reducer";
import userAuth from "./auth/userReducer";

export default combineReducers({
    cartData,
    productsList,
    userAuth

})