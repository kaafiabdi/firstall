import express from "express"
import userToken from "../tokenakhriye/usertoken.js"



const isticmaale = express.Router()

isticmaale.get('/isticmaale',userToken, (req,res)=>{
    res.json("hello isticmaale iiwaran waa kaafi😂😂😂😂😂😂")
   
})




export default isticmaale
