import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import productRouter from './router/productRouter.js'
import mongoose from 'mongoose'

const app = express()

dotenv.config({path:'./Config/.env'})

app.use(morgan('common'))
app.use(cors())

//to read form data
app.use(express.json())

app.use('/products',productRouter)

app.get('/',(req,resp)=>{
    resp.send("<h1>Express Product CRUD</h1>")
})

let mongo_url = process.env.MONGO_URL
mongoose.set('strictQuery', true)    
mongoose.connect(mongo_url,{
    useNewUrlParser : false,
    useUnifiedTopology : false,
}).then((resp)=>{
    console.log("Mongo Cloud connected Successfully....!");
})
.catch((err)=>{
    console.log(err);
    process.exit(1)
})

let port = process.env.PORT
app.listen(port,()=>{
    // console.log(`Server is running on http://localhost:${port}`);
    console.log(`Server is running on http://localhost:${port}`);
})