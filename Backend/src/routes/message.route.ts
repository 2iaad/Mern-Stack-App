import express from "express"
import { protectRoute } from "../middleware/auth.middleware.ts"
import { getUsersForSideBar } from "../controllers/message.controllers.ts"

const router = express.Router()

router.get("/users", protectRoute, getUsersForSideBar)

export default router;