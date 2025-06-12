import cloudinary from "./cloud.js";


const helper = async(filepath)=>{
    const result = await cloudinary.uploader.upload(filepath)

    return{
        url:result.url,
        publicid:result.public_id
    }
}

export default helper