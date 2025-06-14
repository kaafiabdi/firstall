import express from "express"
import usercontrol from "../controllers/usercontrol.js"
import userToken from "../tokenakhriye/usertoken.js"

const router = express.Router()


router.post("/register",usercontrol.register)
router.post("/login",usercontrol.login)
router.get("/getall",usercontrol.getAll)
router.post("/changePassw", userToken,usercontrol.changePassword)
export default router
