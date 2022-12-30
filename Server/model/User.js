import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    re_password : {
        type : String,
        required : true
    },
})

const User = mongoose.model('user', UserSchema)

export default User