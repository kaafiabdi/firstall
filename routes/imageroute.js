import express from "express"
import image_Control from "../cloudinary/image_control.js"
import userToken from "../tokenakhriye/usertoken.js"
import adminToken from "../tokenakhriye/admintoken.js"
import uploads from "../uploads/uploads.js"

const imageRouter = express.Router()

imageRouter.post('/upload',userToken,uploads.single("image"),image_Control.image_control )

imageRouter.delete('/:id',image_Control.imageDelete )

imageRouter.get('/allimages',image_Control.getAllimages)

export default imageRouter