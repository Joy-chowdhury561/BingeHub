import express from "express";
import { signUp, login, getMe, logout } from "../controllers/authController.js"
import { protectRoute } from "../middleware/authMiddleware.js"
import authRateLimiter from "../rateLimters/authLimiter.js";
import generalLimit from "../rateLimters/generalRateLimiter.js"
const router = express.Router();

router.post("/signup",authRateLimiter, signUp)
router.post("/login",authRateLimiter, login)
router.get("/me",generalLimit, protectRoute, getMe)
router.post("/logout",authRateLimiter, protectRoute, logout)

export default router