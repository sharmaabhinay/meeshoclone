import { SET_USERPHONE_NUMBER ,SET_LOGGEDIN_USER, ADD_ITEM_TO_CART} from "./constant"

let initialData = {
    isLoggedIn : false,
    userId:'',
    phone:'',
    orders:[],
    cartItems:[],
    address:{
        PIN:"",
        landmark:"",
        area:'',
        city:'',
        state:'',
        house:'',
        name:''
    }
}
const userAuth = (state=initialData,action)=>{
    const randomUser = action.data
    switch(action.type){
        case SET_USERPHONE_NUMBER:
            return state={
                phone:randomUser,
                isLoggedIn:true
            }
        case SET_LOGGEDIN_USER:
            return state={
                phone:action.data.phone,
                userId:action.data._id,
                isLoggedIn:true,
                cartItems:action.data.cartItems,
                orders:action.data.orders, 
                address:{
                    name:action.data.address.name,
                    PIN:action.data.address.PIN,
                    landmark:action.data.address.landmark,
                    area:action.data.address.area,
                    city:action.data.address.city,
                    house:action.data.address.house,
                    state:action.data.address.state
                }
            }
            
        default:{
             return state
        }
           
    }
}
export default  userAuth;