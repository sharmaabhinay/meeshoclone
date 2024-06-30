import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import { SET_USERPHONE_NUMBER } from "./constant";


function* getUserDetails(action){
    try{
        let response = yield axios.post(`http://localhost:2100/getuser`)
    }catch(err){
        console.log(err)
    }
}
function* userSaga() {
    takeEvery(SET_USERPHONE_NUMBER,getUserDetails)
}
export default userSaga;