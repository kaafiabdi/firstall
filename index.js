import express from "express"
import dataBase from "./database/db.js"
import Router from "./routes/userroute.js"
import dotenv from "dotenv"
dotenv.config()
import isticmaale from "./routes/isticmaale.js"
import admin from "./routes/admin.js"
import imageRouter from "./routes/imageroute.js"




const router = express()
router.use(express.json())
const port = 4000




dataBase()
router.use("/hore/dambe", Router)
router.use("/api/token", isticmaale)
router.use("/api", admin)
router.use("/api/files", imageRouter)



router.listen(port, ()=>{
    console.log(`server runing on port${port}`);
})