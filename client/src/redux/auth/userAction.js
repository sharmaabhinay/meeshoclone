import { ADD_ITEM_TO_CART, SET_USERPHONE_NUMBER, SET_USER_CARTITEMS } from "./constant"

export const setUserPhone = (data)=> {
    return {
        type:SET_USERPHONE_NUMBER,
        data
    }
}
export const setUserCartItmes = (data)=> {
    return {
        type:SET_USER_CARTITEMS,
        data
    }
}
export const add_item_to_cart = (data)=> {
    return {
        type:ADD_ITEM_TO_CART,
        data
    }
}