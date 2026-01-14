import express from "express"
import controller from "../controller/userController.js";


const router = express.Router();
 
router.post("/user",controller.signup)
export default router
