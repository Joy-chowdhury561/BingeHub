import express from "express"
import {protectRoute} from "../middleware/authMiddleware.js"
import {searchAll} from "../controllers/searchController.js"
import {searchMiddleWare} from "../middleware/searchMiddleware.js"
import searchLimit from "../rateLimters/searchLimiter.js"
const router=express.Router();
router.get("/all/:query",searchLimit,searchMiddleWare,searchAll)

export default router