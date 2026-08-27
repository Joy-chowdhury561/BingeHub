import User from "../models/userModel.js";
import fetchFromTMDB from "../services/tmdbService.js";
export async function getUserProfile(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json("you are not authenticated");
    }
    const { query } = req.params;
    const users = await User.find({
      username: { $regex: query, $options: "i" },
    })
      .limit(10)
      .select("username email image ");
    if (user.searchHistory.length === 10) {
      user.searchHistory.pop();
    }
    await User.findByIdAndUpdate(
      { _id: req.user._id, searchHistory: { $ne: query } },
      { $addToSet: { searchHistory: query }},
    );
    await user.save();
    return res.status(200).json(users);
  } catch (error) {
    console.log("error in getUser controller", error.message || error);
    return res.status(500).json({ message: "internal server error" });
  }
}

export async function getMovie(req, res) {
  try {
    const query = req.params.query;
    const trimmedQuery = query.trim();
    const movies = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${trimmedQuery}&include_adult=true&language=en-US&page=1`,
    );
    if (movies.results.length === 0) {
      return res.status(404).json({ message: "no results found!" });
    }
    if (req.user) {
      const user = await User.findById(req.user._id);
      if (user.searchHistory.length === 10) {
        user.searchHistory.pop();
      }
      await User.findByIdAndUpdate(
        { _id: req.user._id, searchHistory: { $ne: query } },
        { $addToSet: { searchHistory: query }},
      );
      await user.save();
    }
    return res.status(200).json({ content: movies.results });
  } catch (error) {
    console.log("error in getMovie controller", error.message || error);
    return res.status(500).json({ message: "internal server error" });
  }
}
export async function getTv(req, res) {
  try {
    const query = req.params.query;
    const trimmedQuery = query.trim();
    const tvs = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${trimmedQuery}&include_adult=true&language=en-US&page=1`,
    );
    if (tvs.results.length === 0) {
      return res.status(404).json({ message: "no results found!" });
    }
    if (req.user) {
      const user = await User.findById(req.user._id);
      if (user.searchHistory.length === 10) {
        user.searchHistory.pop();
      }
      await User.findByIdAndUpdate(
        { _id: req.user._id, searchHistory: { $ne: query } },
        { $addToSet: { searchHistory: query }},
      );
      await user.save();
    }
    return res.status(200).json({ content: tvs.results });
  } catch (error) {
    console.log("error in getTv controller", error.message || error);
    return res.status(500).json({ message: "internal server error" });
  }
}
