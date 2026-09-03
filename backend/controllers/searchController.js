import User from "../models/userModel.js";
import fetchFromTMDB from "../services/tmdbService.js";

export async function searchAll(req, res) {
  try {
    const {query}=req.params
   const moviesData=await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`)
   const TvsData=await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=true&language=en-US&page=1`)
   const media_typedMovies=moviesData.results.map((content)=>({...content,media_type:"movie"}))
   const media_typedTv=TvsData.results.map((content)=>({...content,media_type:"tv"}))
   const searchResult=[...media_typedMovies, ...media_typedTv];
   return res.status(200).json({searchResult})
  } catch (error) {
    console.log("error in search all controller", error.message || error);
    return res.status(500).json({ message: "internal server error" });
  }
}