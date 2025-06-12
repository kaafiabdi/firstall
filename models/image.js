import mongoose from "mongoose";


const image = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    publicid:{
         type:String,
        required:true
    },
    uploadedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{timestamps:true})

export default mongoose.model('image', image)