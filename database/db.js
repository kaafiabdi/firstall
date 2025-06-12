import mongoose from "mongoose";

const dataBase = async()=>{
    await mongoose.connect("mongodb+srv://akaafi259:fullall@cluster0.eiyglgp.mongodb.net/")
    console.log("database connected succesfully");
    
}

export default dataBase