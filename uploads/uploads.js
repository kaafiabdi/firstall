
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "uploads/")
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const fileChecking = (req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(new Error("please upload new image"))
    }
}

export default multer({
    storage:storage,
    fileFilter:fileChecking,
    limits:{
        fileSize:5*1024*1024
    }
})