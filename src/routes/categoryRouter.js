import express from "express"
import categoryController from "../controller/categoryController.js"

const router = express.Router()
router.post("/create",categoryController.createCategory)
router.get("/",categoryController.getAllCategory)
export default router