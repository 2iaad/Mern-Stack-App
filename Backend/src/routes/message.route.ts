import express from "express"
import { protectRoute } from "../middleware/auth.middleware.ts"
import { getUsersForSideBar, getMessages, sendMessage } from "../controllers/message.controllers.ts"

const router = express.Router()

router.get("/users", protectRoute, getUsersForSideBar)
router.get("/:id", protectRoute, getMessages) // The ":" indicates a dynamic parameter.

router.post("/send/:id", protectRoute, sendMessage)

export default router;