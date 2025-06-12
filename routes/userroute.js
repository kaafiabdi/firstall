import express from "express"
import usercontrol from "../controllers/usercontrol.js"


const router = express.Router()


router.post("/register",usercontrol.register)
router.post("/login",usercontrol.login)
router.get("/getall",usercontrol.getAll)

export default router
