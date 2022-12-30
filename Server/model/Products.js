import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name : {
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
    }
})

let Product = mongoose.model('product',ProductSchema)

export default Product