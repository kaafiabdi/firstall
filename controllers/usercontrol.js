import usermodel from "../models/usermodel.js";
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"



const register = async(req,res)=>{
     try{
        const {username,email,password,role} =  req.body
        const hubiye = await usermodel.findOne({username})

        if(hubiye){
            res.status(401).json({
                success:false,
                message:"this user already registered"
            })
        }

        const qariya = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,qariya)



        const newUser= await usermodel.create({
           username,
           email,
           password:hashPassword,
           role
        })

        res.status(201).json({
            success:true,
            message:"waa la register gareeyay userkan",
            user:{
                username,
                email,
                role,
            }
        })

     }catch(err){
        console.log(err);
        
     }
}


const login = async(req,res)=>{
     try{
        const {username,password}= req.body

        const baadhe = await usermodel.findOne({username})

        if(!baadhe){
            res.status(500).json({
                success:false,
                message:"sorry this user isn't registered"
            })
        }

        const token =  jwt.sign(
            {
                userid:baadhe._id,
                username:baadhe.username,
                email:baadhe.email,
                role:baadhe.role
            },process.env.SIR_QARSOON,
            {
                expiresIn:"30m"
            }
        )

        res.status(201).json({
            success:true,

            user:{
                username:baadhe.username,
                email:baadhe.email,
                role:baadhe.role,
                token
            }
        })

        
       

       

     }catch(err){
        console.log(err);
        
     }
}

const getAll = async(req,res)=>{
     try{
        const dhamaan = await usermodel.find({})

        if(dhamaan){
           return res.status(201).json({
            succuss:true,
            message:"waa dhamaan xogta ku jirta database ka",
            data:dhamaan
        })
        }else{
            res.status(404).json({
            succuss:false,
            message:"wax xog ah lama helin",
            
        })
        }
       
        
        
       

       

     }catch(err){
        console.log(err);
        
     }
}


export default {
    register,
    login,
    getAll
}