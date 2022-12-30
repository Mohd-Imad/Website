import express from 'express'
import Product from '../model/Product.js'

const router = express.Router()

/*
    URL:http://localhost:8002/products/create
    Method: POST
    Fields:name, price, qty
*/
router.post('/create', async (req, resp) => {
    try {
        let new_product = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }

        let product = await Product.findOne({ name: new_product.name })
        if (product) {
            return resp.status(401).json({ msg: "Product already exists...!" })
        }

        product = await Product(new_product)
        console.log(product);

        product = await product.save()
        resp.status(200).json({
            result: "Product created successfully....!",
            product: product
        })
    }
    catch (err) {
        if (err) throw err
    }
})

/*
    URL:http://localhost:8002/products/all
    Method: GET
    Fields:None
*/
router.get('/all', async (req, resp) => {
    try {
        let products = await Product.find()
        resp.status(200).json(products)
    }
    catch (err) {
        resp.status(500).json({ msg: err.message })
    }
})

/*
    URL:http://localhost:8002/products/:id
    Method: GET
    Fields: id
*/
router.get('/:id', async (req, resp) => {
    let product_Id = req.params.id
    try {
        let product = await Product.findById(product_Id)
        resp.status(200).json(product)
    }
    catch (err) {
        resp.status(500).json({ msg: "No Product found....!" })
    }
})

/*
    URL:http://localhost:8002/products/:id
    Method: DELETE
    Fields: id
*/
router.delete('/delete/:id', async (req, resp)=>{
    try{
        let product_Id = req.params.id
        let product = await Product.findByIdAndDelete(product_Id)
        resp.status(200).json({result : "Product deleted successfully....!",product : product})
        console.log(`Deleted Product : ${product}`);
    }
    catch(err){
        resp.status(500).json({msg : "No Product found...!"})
    }
})

/*
    URL:http://localhost:8002/products/:id
    Method: PUT
    Fields: id
*/
router.put('/update/:id', async (req, resp)=>{
    let product_Id = req.params.id
    try{
        let updatedProduct = {
            name : req.body.name,
            price : req.body.price,
            qty : req.body.qty
        }

        let product = await Product.findOne({ name: updatedProduct.name })
        if (product) {
            return resp.status(401).json({ msg: "Product with this name is already exists...!" })
        }
        product = await Product.findByIdAndUpdate(product_Id, {$set : updatedProduct})
        resp.status(200).json({
            result : "Product updated successfully....!",
            product : product
        })
        console.log(`Updated Product : ${product}`);
        
    }
    catch(err){
        resp.status(500).json({
            msg : "No Product found....!"
        })
    }
})

export default router