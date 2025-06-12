import express from "express"
import userToken from "../tokenakhriye/usertoken.js"
import adminToken from "../tokenakhriye/admintoken.js"


const admin = express.Router()

admin.get('/admin',userToken,adminToken,(req,res)=>{
    res.status(201).json({
        success:true,
        message:"kusoo dhowoow page ka adminka c/kaafiyow 😂😂😂😂😂😂"
    })
})




export default admin
