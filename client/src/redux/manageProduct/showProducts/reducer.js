import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constant";

export const productsList = (data=[],action)=>{
    switch(action.type){
        case SET_PRODUCT_LIST:
            return action.data
        case SEARCH_PRODUCT:
            return [...data,action.data]
        default:
            return data
    }
}