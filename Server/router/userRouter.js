import express from 'express'
import User from '../model/User.js'

const router = express.Router()

/*
    URL:http://127.10.99.88:8002/users/create
    Method: POST
    Fields:name, mobile, email, password, re_password
*/
router.post('/create', async (req, resp)=>{
    try{
        let newUser = {
            name : req.body.name,
            mobile : req.body.mobile,
            email : req.body.email,
            password : req.body.password,
            re_password : req.body.re_password,
        }

        let user = await User.findOne({email : newUser.email})
            if(user){
                return resp.status(401).json({msg : "User already exists...!"})
            }

        user = await User(newUser)
        console.log(user);
        
        user = await user.save()
        resp.status(200).json({
            result : "User created successfully...!",
            user : user
        })
    }
    catch(err){
       return resp.status(501).json({msg:"Server issue...!"})
    }
})

/*
    URL:http://127.10.99.88:8002/users/all
    Method: GET
    Fields:None
*/
router.get('/all', async (req, resp)=>{
    try{
        let users = await User.find()
        resp.status(200).json(users)
    }
    catch(e){
        return resp.status(501).json({msg : "Server issue...!"})
    }
})

/*
    URL:http://127.10.99.88:8002/users/:id
    Method: GET
    Fields:id
*/
router.get('/:id', async (req, resp)=>{
    try{
        let userID = req.params.id
        let user = await User.findById(userID)
        if(user){
            resp.status(200).json(user)
        }
    }
    catch(e){
        resp.status(500).json({msg : "No User found...!"})
    }
})

/*
    URL:http://127.10.99.88:8002/users/del/:id
    Method: DELETE
    Fields:id
*/
router.delete('/del/:id', async (req, resp)=>{
    let userID = req.params.id
    try{

    }
    catch(e){
        
    }
})

export default router