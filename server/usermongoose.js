const mongoose = require('mongoose');
const altasUrl = 'mongodb+srv://abhiisharma76:meeshoclone@cluster0.jzk2fxs.mongodb.net/meeshoclone'
const localurl = 'mongodb://localhost:27017/Meesho'
let newUrl = 'mongodb+srv://abhiisharma76:meeshoclone@cluster0.jzk2fxs.mongodb.net/meeshoclone?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(localurl)
    .then(() => console.log('user mongoose connected'))
    .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
    phone:{
        required:true,
        type:String,
        
    },
    address:{
        name:{
            default:"",
            type:String
        },
        house:{
            default:"",
            type:String
        },
        city:{
            default:"",
            type:String
        },
        state:{
            default:"",
            type:String
        },
        PIN:{
            default:"",
            type:Number
        },
        area:{
            default:"",
            type:String
        },
        landmark:{
            default:"",
            type:String
        }
    },
    cartItems:[{}],
    orders:[String],
})
module.exports = mongoose.model("users",userSchema)