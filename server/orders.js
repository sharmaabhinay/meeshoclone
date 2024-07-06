const mongoose = require('mongoose');
const localurl = 'mongodb://localhost:27017/Meesho'
let newUrl = 'mongodb+srv://abhiisharma76:meeshoclone@cluster0.jzk2fxs.mongodb.net/meeshoclone?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(localurl).then(()=>console.log('orders connected')).catch((err)=> console.log(err))

const orderSchema = mongoose.Schema({
    order_number:String,
    order_date:{type:String,default:new Date().toLocaleDateString()},
    order_status:{type:String,default:'pending'},
    order_amount:Number,
    user_id:String,
    payment_mod:String,
    // order_phone:String,
    products:[{
        _id:String,
        name:String,
        price:Number,
        image1:String,
        image2:String,
        image3:String,
        image4:String,
        category:String
        
    }],
    order_quantity:{type:Number,default:1},
    
})
module.exports = mongoose.model('Orders',orderSchema)
