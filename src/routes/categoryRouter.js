import express from "express"
import categoryController from "../controller/categoryController.js"

const router = express.Router()
router.post("/create",categoryController.createCategory)
router.get("/getAllCategory",categoryController.getAllCategory)
router.get("/findOneCategory/:id",categoryController.findOnecategory)
router.delete("/deleteOnecategory/:id",categoryController.deleteOnecategory)
router.put("/Update/:id",categoryController.UpdateAllcategory)
export default router