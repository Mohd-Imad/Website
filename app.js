import express from 'express'

const app = express()

app.get('/', (req, resp)=>{
    resp.status(200).send('<h1>!........Server testing........!</h1>')
})

app.listen(8080, ()=>{
    console.log(`Server is running on http://localhost:8080`);
})