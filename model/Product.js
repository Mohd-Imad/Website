import mongoose from "mongoose";

const ProductSchema = mongoose.Schema

const schema = new ProductSchema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    qty : {
        type : Number,
        required : true
    },
    info : {
        type : String,
        required : false
    }
})

let Product = mongoose.model('product', schema)

export default Product