import jwt from "jsonwebtoken"



const userToken = async(req,res,next)=>{
    const token =  req.headers["authorization"]

    const kalajabiye = await token && token.split(" ")[1]

   console.log(kalajabiye);



     const hubiye = await jwt.verify(kalajabiye,process.env.SIR_QARSOON)

     req.userinfo = hubiye

     console.log(hubiye);
     next()
     

  
}

export default userToken