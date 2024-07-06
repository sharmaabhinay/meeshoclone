const mongoose = require('mongoose');
const altasUrl = 'mongodb+srv://abhiisharma76:meeshoclone@cluster0.jzk2fxs.mongodb.net/meeshoclone'
const localurl = 'mongodb://localhost:27017/Meesho'
let newUrl = 'mongodb+srv://abhiisharma76:meeshoclone@cluster0.jzk2fxs.mongodb.net/meeshoclone?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(localurl)
    .then(() => console.log('product mongoose connected'))
    .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    detail: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    category: String
});

module.exports = mongoose.model('Product', productSchema);

