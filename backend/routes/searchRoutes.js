import express from "express"
import {protectRoute} from "../middleware/authMiddleware.js"
import {getUserProfile,getTv,getMovie} from "../controllers/searchController.js"
import {searchMiddleWare} from "../middleware/searchMiddleware.js"
import searchLimit from "../rateLimters/searchLimiter.js"
const router=express.Router();
router.get("/movie/:query",searchLimit,searchMiddleWare,getMovie)
router.get("/profile/:query",searchLimit,protectRoute,getUserProfile);
router.get("/tv/:query",searchLimit,searchMiddleWare,getTv)

export default router