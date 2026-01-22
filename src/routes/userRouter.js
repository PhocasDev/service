import express from "express"
import Controller from "../controller/userController.js"
import { EmailExist } from "../midlleware/validation.js"
import { verifyAccess } from "../midlleware/virifyAccess.js"
const router = express.Router()
router.post("/",EmailExist,Controller.signUp)
router.post("/login",Controller.login)
router.get("/users",verifyAccess("provider"),Controller.getAlluser)
router.get("/",Controller.getId)
router.get("/",Controller.getoneUse)
router.patch("/",Controller.updateUser)

export default router