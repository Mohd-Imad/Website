import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import productRouter from './router/productRouter.js'
import userRouter from './router/userRouter.js'
import mongoose from 'mongoose'

const app = express()

dotenv.config({path:'./Config/.env'})

app.use(morgan('tiny'))
app.use(cors())

//to read form data
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//routers

app.get('/',(req,resp)=>{
    resp.send("<h1>Express Product CRUD</h1>")
})
app.use('/products',productRouter)
app.use('/users',userRouter)
let port = process.env.PORT
let host = process.env.HOST_NAME
app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server is running on http://${host}:${port}`);
    // console.log(`Server is running on http://localhost:${port}`);
})