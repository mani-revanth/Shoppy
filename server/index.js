import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import axios from 'axios';
import { stringLength } from '@firebase/util';


const app = express();
app.use(express.json());
app.use(cors());


const CONNECTION_URL = "mongodb+srv://revanth:vizag@cluster0.djvfuyv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, (err) => {
    if (err) {
        console.log(err);
    }
})


const best_sellers_for_men = new mongoose.Schema({
    id1: String,
    card_title: String,
    card_description: String,
    card_image_src: String,
    card_cost: Number,
    warning: String,
    offer: Number,
    is_best_seller: Number,
})

const best_sellers_for_women = new mongoose.Schema({
    id1: String,
    card_title: String,
    card_description: String,
    card_image_src: String,
    card_cost: Number,
    warning: String,
    offer: Number,
    is_best_seller: Number,
})

const cards_for_men = new mongoose.Schema({
    card_name: String,
    card_image_src: String,
    products_array: [{
        card_title: String,
        card_description: String,
        card_image_src: String,
        card_cost: Number,
        warning: String,
        offer: Number,
        is_best_seller: Number,
    }],
})

const cards_for_women = new mongoose.Schema({
    card_name: String,
    card_image_src: String,
    products_array: [{
        card_title: String,
        card_description: String,
        card_image_src: String,
        card_cost: Number,
        warning: String,
        offer: Number,
        is_best_seller: Number,
    }],
})

const cards_for_brands = new mongoose.Schema({
    card_name: String,
    card_image_src: String,
    products_array: [{
        card_title: String,
        card_description: String,
        card_image_src: String,
        card_cost: Number,
        warning: String,
        offer: Number,
        is_best_seller: Number,
    }],
})



const current_cart = new mongoose.Schema({
    user_name: String,
    cart_items: [{
        card_title: String,
        card_description: String,
        card_image_src: String,
        card_cost: Number,
        warning: String,
        offer: Number,
        is_best_seller: Number,
        quantity: Number,
        size : String,
    }],
})

const user_bill = new mongoose.Schema({
    user_name: String,
    time: String,
    bill_status: String,
    cart_items: [{
        card_title: String,
        card_description: String,
        card_image_src: String,
        card_cost: Number,
        warning: String,
        offer: Number,
        is_best_seller: Number,
    }]
})

const search_product = new mongoose.Schema({
    name: String,
    id: String,
    category: String,
})


const product_details = new mongoose.Schema({
    card_title: String,
    card_description: String,
    card_image_src: String,
    card_cost: Number,
    warning: String,
    offer: Number,
    is_best_seller: Number,
    id1: String,
    gender: Number,
    images: [String],
    themes: [String],
    categories: [String],
    comments: [{
        name: String,
        text: String,
        rating: Number,
    }],

})


const best_sellers_for_men_model = new mongoose.model("best_sellers_for_men_model", best_sellers_for_men);
const best_sellers_for_women_model = new mongoose.model("best_sellers_for_women_model", best_sellers_for_women);
const cards_for_men_model = new mongoose.model("cards_for_men_model", cards_for_men);
const cards_for_women_model = new mongoose.model("cards_for_women_model", cards_for_women);
const cards_for_brands_model = new mongoose.model("cards_for_brands_model", cards_for_brands);
const current_cart_model = new mongoose.model("current_cart_model", current_cart);
const user_bill_model = new mongoose.model("user_bill_model", user_bill);
//const search_product_model=new mongoose.model("search_product_model",search_product);
const product_details_model = new mongoose.model("product_details_model", product_details);



/////////////////////////////////////////////////////////SEARCH HANDLING FUNCTIONS////////////////////////////////////////////////////////////////
/*

app.post("/add_to_search",(req,res)=>{
    const x=new search_product_model(req.body);
    x.save();
    res.send("yes");
})

app.get("/get_search_products",(req,res)=>{
    search_product_model.find({},(err,abc)=>{
        if(err)
        res.send("no");
        res.send(abc);
    })
})


*/

//////////////////////////////////////////////////////////SEARCH HANDLING FUNCTIONS///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////CART HANDLING FUNCTIONS////////////////////////////////////////////////////////////////////

app.post("/add_new_cart", async (req, res) => {
    const abc = await current_cart_model.findOne({ user_name: `${req.body.name}` });
    if (abc == null) {
        const cart = new current_cart_model({ user_name: `${req.body.name}`, cart_items: [] });
        cart.save();
    }
    res.send("yes");
})

app.post("/update_bill_status", async (req, res) => {
    const x = await user_bill_model.findOne({ _id: (req.body).id });
    x.bill_status = req.body.new_status;
    x.save();
    res.send("yes");
})


app.post("/generate_bill", async (req, res) => {
    //console.log(req.body.cart_items);
    const x = await user_bill_model(req.body);
    //x.cart_items=(req.body.cart_items);
    //console.log(x.cart_items);
    x.save();
    //console.log(x);
    res.send("yes");
})

app.post("/empty_the_cart", (req, res) => {
    console.log("recieved");
    current_cart_model.updateOne({ user_name: `${req.body.name}` }, { $set: { cart_items: [] } }, function (err, affected) {
        //console.log('affected: ', affected);
        res.send("yes");
    });
})

app.get("/get_all_bills", (req, res) => {
    user_bill_model.find({}, (err, abc) => {
        if (err)
            console.log(err);
        else
            res.send(abc);
    })
})


app.post("/get_previous_bills", (req, res) => {
    //console.log(req.body.name);
    //console.log("received");
    user_bill_model.find({ user_name: (req.body).name }, (err, abc) => {
        if (err)
            console.log(err);
        else {
            //console.log(abc);
            res.send(abc);
        }
    })
})


app.post("/get_cart_items", (req, res) => {
    //console.log(req.body.name);
    current_cart_model.findOne({ user_name: (req.body).name }, (err, abc) => {
        if (err)
            console.log(err);
        else
            res.send(abc.cart_items);
    })
})

app.post("/add_item_to_cart", async (req, res) => {
    //console.log(req.body);
    const abc = await current_cart_model.findOne({ user_name: (req.body).name });
    let x = { ...(req.body) };
    //console.log(abc);
    if (abc) {
        abc.cart_items.push(x);
        abc.save();
    }
    res.send("yes");
})


app.post("/remove_item_from_cart", async (req, res) => {
    const abc = await current_cart_model.findOne({ user_name: (req.body).name });
    (abc.cart_items).splice(req.body.index, 1);
    abc.save();
    res.send("yes");
})

app.post("/get_length_of_cart", (req, res) => {
    current_cart_model.find({ user_name: req.body.name }, (err, abc) => {
        if (err)
            console.log(err);
        else {
            let x = "0";
            //console.log(abc);
            if (abc.length)
                x = `${abc[0].cart_items.length}`;
            res.send(x);
        }
    })
})


////////////////////////////////////////////////////////Product HANDLING FUNCTIONS////////////////////////////////////////////////////////////////



/*app.post("/add_new_product", async (req, res) => {
    const abc = await product_details_model.findOne({ _id: (req.body)._id });
    if (abc == null) {
        const product = new product_details_model(req.body);
        product.save();
    }
    res.send("yes");
})*/



app.post("/get_product", async (req, res) => {
    let abc = await product_details_model.findOne({ _id: (req.body)._id });
    
    res.send(abc);
})


app.post("/update_product", async (req, res) => {
    const abc = await product_details_model.findOne({ _id: (req.body)._id });
    abc.images = (req.body).images;
    abc.themes = (req.body).themes;
    abc.categories = (req.body).categories;
    abc.save();
    res.send("yes");
})

app.post("/similar_products", async (req, res) => {
    let abc=await cards_for_men_model.findOne({_id:(req.body).id});
    if(abc)
    abc=abc.products_array;
    res.send(abc);
})



app.post("/add_review", async (req, res) => {
    const abc = await product_details_model.findOne({ _id: (req.body).id });
    abc.comments.push((req.body).comment);
    abc.save();
    res.send("yes");
})





///////////////////////////////////////////////////////MEN PRODUCT HANDLING////////////////////////////////////////////////////////////////////


app.post("/update_men_product", async (req, res) => {
    const abc = await cards_for_men_model.findOne({ _id: (req.body).id1 });
    let x = {
        _id: (req.body).id2,
        card_title: (req.body).card_title,
        card_description: (req.body).card_description,
        card_image_src: (req.body).card_image_src,
        card_cost: (req.body).card_cost,
        warning: (req.body).warning,
        offer: (req.body).offer,
        is_best_seller: (req.body).is_best_seller,
    }
    abc.products_array[(req.body).i] = x;
    const product = await product_details_model.findOne({ _id: (req.body).id2 });
    product.set(x);
    product.save();
    //await current_cart_model.updateMany({'cart_items._id':(req.body).id2},{$set :{'cart_items.$':x}});
    abc.save();
    res.send("yes");
})

app.post("/add_new_product_men", async (req, res) => {
    //console.log(req.body);
    //console.log("\n\n\n\n\n\n\n\n");
    let x = {
        card_title: `${req.body.card_title}`,
        card_description: `${req.body.card_description}`,
        card_image_src: `${req.body.card_image_src}`,
        card_cost: `${req.body.card_cost}`,
        warning: " ",
        offer: 0,
        is_best_seller: 0,
    }
    //console.log(x);
    //console.log("hello world");
    const abc = await cards_for_men_model.findOne({ _id: (req.body).id });
    abc.products_array.push(x);
    await abc.save();
    const product=new product_details_model({_id:(abc.products_array[(abc.products_array).length-1]._id),...x,id1:(req.body.id),gender:0,images:[],themes:[],categories:[],comments:[]});
    await product.save();
    res.send("yes");
})


app.post("/remove_card_from_array", async (req, res) => {
    await cards_for_men_model.updateOne({ _id: (req.body).main_id }, { $pull: { products_array: { _id: (req.body).temp_id } } });
    await product_details_model.deleteOne({_id:(req.body).temp_id});
    res.send("yes");
})


app.post("/get_sub_cards_men",async (req, res) => {
    let abc=null;
    if(mongoose.Types.ObjectId.isValid(req.body.id))
    {
    abc=await cards_for_men_model.findOne({ _id: (req.body).id });
    }
    res.send(abc);
})


app.post("/add_men_card", (req, res) => {
    //console.log("hello world");
    const x = new cards_for_men_model(req.body);
    x.save();
    res.send(x._id);
})


app.post("/get_men_cards", (req, res) => {
    cards_for_men_model.find({}, function (err, abc) {
        if (err) {
            console.log(err);
        }
        else
            res.send(abc);
    })
})


////////////////////////////////////////////////////////////////WOMEN PRODUCT HANDLING/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////WOMEN PRODUCT HANDLING/////////////////////////////////////////////////////////////////

app.post("/update_women_product", async (req, res) => {
    const abc = await cards_for_women_model.findOne({ _id: (req.body).id1 });
    let x = {
        _id: (req.body).id2,
        card_title: (req.body).card_title,
        card_description: (req.body).card_description,
        card_image_src: (req.body).card_image_src,
        card_cost: (req.body).card_cost,
        warning: (req.body).warning,
        offer: (req.body).offer,
        is_best_seller: (req.body).is_best_seller,
    }
    abc.products_array[(req.body).i] = x;
    const product = await product_details_model.findOne({ _id: (req.body).id2 });
    product.set(x);
    product.save();
    abc.save();
    res.send("yes");
})

app.post("/get_women_cards", (req, res) => {
    cards_for_women_model.find({}, function (err, abc) {
        if (err) {
            console.log(err);
        }
        else
            res.send(abc);
    })
})

app.post("/add_women_card", (req, res) => {
    console.log("hello world");
    const x = new cards_for_women_model(req.body);
    x.save();
    res.send(x._id);
})


app.post("/get_sub_cards_women", (req, res) => {
    cards_for_women_model.findOne({ _id: (req.body).id }, (err, abc) => {
        if (err)
            console.log(err);
        else
            res.send(abc.products_array);
    })
})


app.post("/remove_card_from_array_women", async (req, res) => {
    await cards_for_women_model.updateOne({ _id: (req.body).main_id }, { $pull: { products_array: { _id: (req.body).temp_id } } });
    res.send("yes");
})


app.post("/add_new_product_women", async (req, res) => {
    //console.log(req.body);
    //console.log("\n\n\n\n\n\n\n\n");
    let x = {
        card_title: `${req.body.card_title}`,
        card_description: `${req.body.card_description}`,
        card_image_src: `${req.body.card_image_src}`,
        card_cost: `${req.body.card_cost}`,
        warning: " ",
        offer: 0,
        is_best_seller: 0,
    }
    console.log(x);
    //console.log("hello world");
    const abc = await cards_for_women_model.findOne({ _id: (req.body).id });
    abc.products_array.push(x);
    await abc.save();
    const product=new product_details_model({_id:(abc.products_array[(abc.products_array).length-1]._id),...x,id1:(req.body.id),gender:0,images:[],themes:[],categories:[],comments:[]});
    await product.save();
    abc.save();
    res.send("yes");
})




////////////////////////////////////////////////////////////////WOMEN PRODUCT HANDLING/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////BEST SELLER MEN///////////////////////////////////////////////////////////////////


app.post("/add_new_card_bestsellermen", (req, res) => {
    //console.log("hello world");
    const x = new best_sellers_for_men_model(req.body);
    //console.log(req.body);
    x.save();
    res.send("yes");
})

app.post("/delete_card_bestsellermen", (req, res) => {
    //console.log(req.body);
    best_sellers_for_men_model.deleteOne({ id1: (req.body).id1 }, function (err, obj) {
        console.log("hello");
        if (err) {
            console.log(err);
        }
        else
            res.send("yes");
    });
    //res.send("yes");
})

app.post("/update_card_bestsellermen", (req, res) => {
    //console.log(req.body);
    best_sellers_for_men_model.findOneAndUpdate({ id1: (req.body).id1 }, (req.body), { new: true }).then(() => {
        res.send("yes");
    }).catch((err) => {
        console.log(err);
    })
})


app.post("/get_cards_bestsellermen", (req, res) => {
    best_sellers_for_men_model.find({}, function (err, abc) {
        if (err) {
            console.log(err);
        }
        else
            res.send(abc);
    })
})


////////////////////////////////////////////////////////////////BEST SELLER MEN//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////BEST SELLER WOMEN////////////////////////////////////////////////////////////////


app.post("/add_new_card_bestsellerwomen", (req, res) => {
    console.log("hello world");
    const x = new best_sellers_for_women_model(req.body);
    x.save();
    res.send("yes");
})

app.post("/delete_card_bestsellerwomen", (req, res) => {
    console.log(req.body);
    best_sellers_for_women_model.deleteOne({ id1: (req.body).id1 }, function (err, obj) {
        console.log("hello");
        if (err) {
            console.log(err);
        }
        else
            res.send("yes");
    });
    //res.send("yes");
})


app.post("/update_card_bestsellerwomen", (req, res) => {
    //console.log(req.body);
    best_sellers_for_women_model.findOneAndUpdate({ id1: (req.body).id1 }, (req.body), { new: true }).then(() => {
        res.send("yes");
    }).catch((err) => {
        console.log(err);
    })
})

app.post("/get_cards_bestsellerwomen", (req, res) => {
    best_sellers_for_women_model.find({}, function (err, abc) {
        if (err) {
            console.log(err);
        }
        else
            res.send(abc);
    })
})

////////////////////////////////////////////////////////BEST SELLER WOMEN//////////////////////////////////////////////////////////////////////////////

app.listen(5000, () => {
    console.log("server running");
})