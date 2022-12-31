import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import productRouter from './router/productRouter.js'
import userRouter from './router/userRouter.js'
import mongoose from 'mongoose'

const app = express()

dotenv.config({path:'./Config/.env'})
let port = process.env.port
let hostname = process.env.HOST_NAME


//routers
app.get('/',(req,resp)=>{
    resp.send("<h1>Express Product CRUD</h1>")
})

app.listen(port,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
    // console.log(`Server is running on http://localhost:${port}`);
})