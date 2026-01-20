import express from "express"
import serviceController from "../controller/serviceController.js"
import {verifyAccess} from "../midlleware/virifyAccess.js"

const router = express.Router()


router.post("/", verifyAccess("provider") , serviceController.createservice)

export default router
