import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constant"

export const productList = (data)=>{
    return {
        type:PRODUCT_LIST
    }
}
export const searchProduct = (query)=> {
    return {
        type:SEARCH_PRODUCT,
        data:query
    }
}