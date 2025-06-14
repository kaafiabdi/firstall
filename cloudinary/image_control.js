import image from "../models/image.js";
import cloudinary from "./cloud.js";

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

const getAllimages = async(req,res)=>{
    const result = await image.find()

    res.status(201).json({
        success:true,
        data:result
    })
}

const imageDelete = async(req,res)=>{
    try{
        const currentIDofimage = req.params.id
      

        const Image = await image.findById(currentIDofimage)

        if(!Image){
        return res.status(500).json({
            success:false,
            message:"image not found"
        }) }

        if(Image.publicid){
            const result = await cloudinary.uploader.destroy(Image.publicid)

        }

        await image.findByIdAndDelete(currentIDofimage)

        res.status(201).json({
            success:true,
            message:"waa la delete gareeyay sawirka"
        })

   

    }catch(err){
        console.log(err);
        
    }

}

export default {
    image_control,
    imageDelete,
    getAllimages
}