import express from "express";
import generalLimit from "../rateLimters/generalRateLimiter.js"
import {
  getTVTrailer,
  getTVDetails,
  getSimilarTVs,
  getTVsByCategory,
  getTrendingTv
} from "../controllers/TVController.js";
const router = express.Router();
router.get("/trendingTv",generalLimit,getTrendingTv)
router.get("/trailer/:id",generalLimit, getTVTrailer);
router.get("/detail/:id",generalLimit, getTVDetails);
router.get("/similar/:id",generalLimit, getSimilarTVs);
router.get("/:category",generalLimit, getTVsByCategory);

export default router;
