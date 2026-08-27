import fetchFromTMDB from "../services/tmdbService.js";
export const getTrendingTv = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    );
    const trendingMovie =
      data.results[Math.trunc(Math.random() * data.results.length)];
    return res.status(200).json({ content: trendingMovie });
  } catch (error) {
    console.log("error in getTrendingAll controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};

export const getTVTrailer = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
    );
    return res.status(200).json({ success: true, trailer: data.results });
  } catch (error) {
    console.log("error in movieTrailer controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getTVDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    );
    return res.status(200).json({ success: true, details: data });
  } catch (error) {
    console.log("error in getMovieDetails controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getSimilarTVs = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
    );
    const media_typedData=data.results.map((content)=>({...content,media_type: "tv"}))
    return res.status(200).json({ content: media_typedData });
  } catch (error) {
    console.log("error in getSimilarMovies controller", error.message || error);
    return res.status(500).json("internal server error");
  }
};
export const getTVsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`,
    );
    const media_typedData=data.results.map((content)=>({...content,media_type: "tv"}))
    return res.status(200).json({ content: media_typedData });
  } catch (error) {
    console.log(
      "error in getMoviesByCategory controller",
      error.message || error,
    );
    return res.status(500).json("internal server error");
  }
};
