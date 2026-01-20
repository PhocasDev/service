import express from "express"
import categoryRouter from "./categoryRouter.js"
import  useRouter   from "./userRouter.js"
import serviceRouter from "./serviceRouter.js"

const router = express.Router()
router.use("/user",useRouter)
router.use("/category",categoryRouter)
router.use("/getAllCategory",categoryRouter)
router.use("/service", serviceRouter)
export default router