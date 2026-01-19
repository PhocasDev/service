import express from "express"
import Controller from "../controller/userController.js"
import { EmailExist } from "../midlleware/validation.js"
import { verifyAccess } from "../midlleware/virifyAccess.js"
const router = express.Router()
router.post("/user",EmailExist,Controller.signUp)
router.post("/user/login",Controller.login)
router.get("/users",verifyAccess("user"),Controller.getAlluser)
router.get("/user",Controller.getId)
router.get("/user/:id",Controller.getoneUse)
router.patch("/user/:id",Controller.updateUser)

export default router