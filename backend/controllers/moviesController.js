import fetchFromTMDB from "../services/tmdbService.js";
export const getTrendingAll = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    );
    const trendingAll =
      data.results[Math.trunc(Math.random() * data.results.length)];
    return res.status(200).json({ content: trendingAll });
  } catch (error) {
    console.log("error in getTrendingAll controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};

export const getTrendingMovie = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    );
    const trendingMovie =
      data.results[Math.trunc(Math.random() * data.results.length)];
    return res.status(200).json({ content: trendingMovie });
  } catch (error) {
    console.log("error in getTrendingAll controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getMovieTrailer = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    );
    return res.status(200).json({ success: true, trailer: data.results });
  } catch (error) {
    console.log("error in movieTrailer controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getMovieDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    );
    return res.status(200).json({ success: true, details: data });
  } catch (error) {
    console.log("error in getMovieDetails controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getSimilarMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    );
    const media_typedData=data.results.map((content)=>({...content,media_type: "movie"}))
    return res.status(200).json({ content: media_typedData });
  } catch (error) {
    console.log("error in getSimilarMovies controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getMoviesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    );
    const media_typedData=data.results.map((content)=>({...content,media_type: "movie"}))
    return res.status(200).json({ content: media_typedData });
  } catch (error) {
    console.log(
      "error in getMoviesByCategory controller",
      error.message || error,
    );
    return res.status(500).json("internal server error");
  }
};
