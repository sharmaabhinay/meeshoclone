const express = require('express');
const app = express();
const cors = require('cors')
const Product = require('./mongoose');  // Import the mongoose model
const users = require('./usermongoose')
const Orders = require('./orders')
const jwt = require('jsonwebtoken');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51POmUyP9bDkiuBZVxWJjNzHWLOdj6w1qhslzjVzq8fSmxZ807MoJ3nXhbIOF2KRi9GSCIzab7YLYVz3iSM30l1AS00KWGbsFH5');
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=> {
    res.send('shri ganesh')
})

app.post('/checkout-payment', async (req, res) => {
    const {name,price} = req.body;    // res.send("hello")
    try {
        let amount = 100; // amount in cents
        const product = await stripe.products.create({
            name: "motorola fusion 50"
        });

        if (product) {
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: amount,
                currency: "usd"
            });

            if (price.id) {
                const session = await stripe.checkout.sessions.create({
                    line_items: [
                        {
                            price: price.id,
                            quantity: 1
                        }
                    ],
                    mode: "payment",
                    success_url: "http://localhost:5173/payment-success",
                    cancel_url: "http://localhost:5173/payment-failed",
                    customer_email: "demo@gmail.com"
                });

                return res.json({ sessionId: session.id });
            }
        }
    } catch (error) {
        console.error("Error creating payment session:");
        return res.status(500).json({ error: error.message });
    }
});


app.get('/getproducts', async (req, res) => {
    try {
        const products = await Product.find();  // Use the mongoose model to find products
        res.json(products);  // Send the found products as a response
    } catch (err) {
        console.error("something went wrong");
        res.status(500).send('Internal Server Error');
    }// Empty dependency array to run the effect only once
    
});
app.post('/post', (req, res) => {
    const filteredBody = {};
    for (const key in req.body) {
        if (req.body[key]) {
            filteredBody[key] = req.body[key];
        }
    }

    // Create a new Product instance with non-empty fields
    const product = new Product(filteredBody);

    product.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send('Error saving product');
        });
});
app.post('/product/:id',async (req,res)=> {
    // console.log(req.params.id)
    try {
        const products = await Product.find({_id:req.params.id});  // Use the mongoose model to find products
        // console.log(products);
        res.json(products);  // Send the found products as a response
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }//

})
app.get('/createuser',async (req,res)=> {

    try{
        let result = await users.find()
        res.send(result)
    }catch(err){
        console.log(err)
    }
})
app.post('/getuser', async (req, res) => {
    const { phone } = req.body;
    

    try {
        let result = await users.findOne({ phone: phone });

        if (!result) {
            let newUser = new users(req.body);  // Initialize new user with phone number
            await newUser.save();  // Save new user to database
            res.json(newUser);  // Respond with the new user
        } else {
            res.json(result);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/setUser-address',async (req,res)=>{
    const {phone,newaddress,orders} = req.body;
    try{
        let user = await users.findOneAndUpdate({phone:phone},
            { $set: { address: newaddress} },
            { new: true }
        )
        if(user){
            res.send(user)
        }else{
            res.send('something got wrong')
        }
    }catch(err){
        console.log(err)
    }
})
app.post('/pricefilter',async (req,res)=> {
    try{
        let response = await Product.find({})
    }catch(err){
        console.log(err)
    }
})
app.post("/addtocart", async (req, res) => {
    const { phone, newCartItem } = req.body;
    console.log(newCartItem)

    try {
        let user = await users.findOne({ phone: phone });

        if (user) {
            user.cartItems.unshift(newCartItem);
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
const { ObjectId } = require('mongodb');

app.post("/remove-cart-item", async (req, res) => {
    const { phone, cartItem } = req.body;
    console.log(req.body)
    // console.log(`Phone: ${phone}, CartItem: ${cartItem}`);

    try {
        // const cartItemId = new ObjectId(cartItem._id);

        const user = await users.findOneAndUpdate(
            { phone: phone },
            { $pull: { cartItems: { _id: cartItem } } },
            { new: true }
        );

        if (user) {
            res.json(user);
            console.log(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.post('/get-product-ifexist', async (req,res)=> {
    const {phone,productId} = req.body;
    console.log('phone : ',phone , "productId : ",productId)
    try{
        let user = await users.findOne({phone:phone})
        console.log(user)
        // res.send(user.cartItems)
        if(!user){
            res.json('user not found')
        }else{
            let result = await user.cartItems.findOne({_id:productId})
            if(result){
                res.json('item found')
            }else{
                res.json('item not found')
            }
        }
    }catch(err){
        console.log(err)
    }
})





app.post('/searchProducts', async (req, res) => {
    const searchTerm =req.body.name; 
    // console.log()
    try {
        let result = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while searching for products' });
    }
    // res.send(req.body.name)
});

app.post('/order-place',async (req,res)=> {
    console.log(req.body)
    try{
        let result = await new Orders(req.body)
        await result.save()
        res.send('order placed')
    }catch(er){
        console.log(err)
        res.send('something went wrong')
    }
})
app.post('/get-user-orders',async (req,res)=> {
    let {user_id} = req.body;
    try{
        let result = await Orders.findOne({user_id:user_id})
        res.send(result)
    }catch(err){
        console.log(err)
    }
})
app.get('/get-orders',async (req,res)=>{
    try{
        let result = await Orders.find()
        res.send(result)
    }catch(err){
        console.log(err)
    }
})



app.listen(2100, () => {
    console.log('Server is running on port: 2100');
});
