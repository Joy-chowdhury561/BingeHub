import express from "express"
import generalLimit from "../rateLimters/generalRateLimiter.js"
import {getMovieTrailer,getMovieDetails,getSimilarMovies,getMoviesByCategory,getTrendingAll,getTrendingMovie} from "../controllers/moviesController.js"
const router=express.Router();
router.get("/trendingAll",generalLimit,getTrendingAll)
router.get("/trendingMovie",generalLimit,getTrendingMovie)
router.get("/trailer/:id",generalLimit,getMovieTrailer)
router.get("/detail/:id",generalLimit,getMovieDetails);
router.get("/similar/:id",generalLimit,getSimilarMovies);
router.get("/:category",generalLimit,getMoviesByCategory)
export default router