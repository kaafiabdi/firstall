import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    
    },
    role:String
})

export default mongoose.model('user', userModel)