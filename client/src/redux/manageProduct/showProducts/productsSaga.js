import { takeEvery, put, call, take } from 'redux-saga/effects';
import { ADD_TO_CART, PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from '../constant';
import axios from 'axios';
import { ADD_ITEM_TO_CART, SET_LOGGEDIN_USER, SET_USERPHONE_NUMBER } from '../../auth/constant';
import backendUrl from '../../../backend';
// console.log()

function* getProducts() {
    try {
        const { data } = yield call(axios.get, `${backendUrl}/getproducts`);
        yield put({ type: SET_PRODUCT_LIST, data });
    } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error appropriately
    }
}

function* searchProducts(action) {
    console.log(action.data)
    let query = {
        name:action.data
    }
    try {
        const { data } = yield call(axios.post, `${backendUrl}/searchProducts`,query);
        yield put({ type: SET_PRODUCT_LIST, data: data }); // Ensure action has correct payload
        console.log(data)
    } catch (error) {
        console.error('Error searching products:', error);
        // Handle error appropriately
    }
}
function* getUsers (action){
    const userPhone = {
        phone:action.data
    }
    try{
        const {data} = yield axios.post(`${backendUrl}/getuser`,userPhone)
        yield put({type:SET_LOGGEDIN_USER,data:data});
        return data;
    }catch(err){
        console.log(err)
    }
}
function* addtocart (action){
    let userDetails = action.data
    try{
        const {data} = yield axios.post(`${backendUrl}/addtocart`,userDetails)
        // yield put({type:ADD_ITEM_TO_CART,data:data})
        console.log(data)

    }catch(err){
        console.log(err)
    }
    console.log(action.data)
}

function* productsSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, searchProducts);
    yield takeEvery(SET_USERPHONE_NUMBER,getUsers)
    yield takeEvery(ADD_ITEM_TO_CART,addtocart)
}

export default productsSaga;
