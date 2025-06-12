import express from "express"
import imageControl from "../cloudinary/image_control.js"
import userToken from "../tokenakhriye/usertoken.js"
import uploads from "../uploads/uploads.js"

const imageRouter = express.Router()

imageRouter.post('/upload',userToken,uploads.single("image"),imageControl )

export default imageRouter