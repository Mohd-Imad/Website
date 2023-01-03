import express from 'express'
import bcrypt from 'bcrypt'
import User from '../model/User.js'

const router = express.Router()

/*
    URL:http://127.18.17.16:8005/users/create
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

        let salt = bcrypt.genSaltSync(10)
        let password = bcrypt.hashSync(password,salt)


        let user = await User.findOne({email : newUser.email})
            if(user){
                return resp.status(401).json({msg : "User already exists...!"})
            }

        user = await User(...newUser,password)
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
    URL:http://127.18.17.16:8005/users/all
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
    URL:http://127.18.17.16:8005/users/:id
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
        else{
            resp.status(401).json({msg : "No User found...!"})
        }
    }
    catch(e){
        resp.status(500).json({msg : "Server issue...!"})
    }
})

/*
    URL:http://127.18.17.16:8005/users/del/:id
    Method: DELETE
    Fields:id
*/
router.delete('/del/:id', async (req, resp)=>{
    try{
        let userID = req.params.id
        let user = await User.findById(userID)
            if(!user){
                resp.status(401).json({msg : "User not found...!"})
            }

         user = await User.findByIdAndDelete(userID)
        resp.status(200).json({
            result : "User deleted successfully..!",
            user : user
        })
        console.log(`Deleted User : ${user}`);
        
    }
    catch(e){
        resp.status(501).json({msg : "Server issue...!"})
    }
})

/*
    URL:http://127.18.17.16:8005/users/update/:id
    Method: PUT
    Fields:id
*/
router.put('/update/:id', async (req, resp)=>{
    try{
        let updatedUser = {
            name : req.body.name,
            mobile : req.body.mobile,
            email : req.body.email,
            password : req.body.password,
            re_password : req.body.re_password,
        }
         let userID = req.params.id

         let user = await User.findOne({email : updatedUser.email})
         if(user){
            resp.status(401).json({msg : "User with this email already exists...!"})
         }

        user = await User.findById(userID)
         if(!user){
            resp.status(401).json({msg :"User not found...!"})
         }
         user = await User.findByIdAndUpdate(userID, {$set : updatedUser})
         resp.status(200).json({
            result : "User details updated successfully...!",
            user : user
         })
         console.log(`Updated User : ${user}`);
         
    }
    catch(err){

    }
})

export default router