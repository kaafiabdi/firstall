import image from "../models/image.js";
import helper from "./helper.js";

const image_control = async (req,res)=>{
    if(!req.file){
        return res.status(500).json({
            success:false,
            message:"fadlan sawir soo gali"
        })
    }

    const result = await helper(req.file.path)

    const newImage = new image({
        url:result.url,
        publicid:result.publicid,
        uploadedby:req.userinfo.userid
    })

    const imageSve =  await newImage.save()
    res.json(imageSve)


}


export default image_control