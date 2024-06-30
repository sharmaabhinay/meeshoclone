import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "../constant";

const cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            // console.log(action.data);
            return [...data, action.data];
        case REMOVE_TO_CART:
            return data.filter(item => item.id !== action.data.id);
        case EMPTY_CART:
            return [];
        default:
            return data;
    }
}

export default cartData;
