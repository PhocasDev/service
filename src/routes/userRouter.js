import express from "express"
import Controller from "../controller/userController.js"
import { EmailExist } from "../midlleware/validation.js"

const router = express.Router()
router.post("/user",EmailExist,Controller.signUp)
router.post("/user/login",Controller.login)
router.get("/users/",Controller.getAlluser)
export default router