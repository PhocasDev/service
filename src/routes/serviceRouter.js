import express from "express"
import serviceController from "../controller/serviceController.js"
import {verifyAccess} from "../midlleware/virifyAccess.js"

const router = express.Router()


router.post("/", verifyAccess("provider") , serviceController.createservice)
router.get("/",serviceController.findServises)
router.get("/",serviceController.findoneService)
export default router
