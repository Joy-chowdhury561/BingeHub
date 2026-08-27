export const getTrendingAll = async () => {
  try {
    const res = await fetch("/api/movie/trendingAll");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("error in getting trending content");
    }
    return data.content;
  } catch (error) {
    console.log("error in getting trending content", error.message || error);
    throw error;
  }
};
export const getMovieByCategory = async (category) => {
  try {
    const res = await fetch(`/api/movie/${category}`);
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.log("error in getting top rated", error.message || error);
    throw error;
  }
};
export const getTvByCategory = async (category) => {
  try {
    const res = await fetch(`/api/tv/${category}`);
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.log("error in getting top rated", error.message || error);
    throw error;
  }
};
export const getAllCategory = async (
  movieCategory,
  tvCategory = movieCategory,
) => {
  try {
    const Movieres = await fetch(`/api/movie/${movieCategory}`);
    const Tvres = await fetch(`/api/tv/${tvCategory}`);
    const movieData = await Movieres.json();
    const tvData = await Tvres.json();
    const trendingMovies = movieData.content;
    const trendingTV = tvData.content;
    const data = [...trendingTV, ...trendingMovies];
    return data;
  } catch (error) {
    console.log("error in getting top rated", error.message || error);
    throw error;
  }
};
export const getTrendingMovie = async () => {
  try {
    const res = await fetch("/api/movie/trendingMovie");
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.log("error in getting trending movie", error.message || error);
    throw error;
  }
};
export const getTrendingTv=async()=>{
    try {
        const res=await fetch("/api/tv/trendingTv");
        const data=await res.json()
        return data.content
    } catch (error) {
        console.log("error in getting trending tv show",error.message || error);
        throw error
    }
}
export const getMovieDetail=async(id)=>{
  try {
    const res=await fetch(`/api/movie/detail/${id}`)
    const data=await res.json()
    return data.details;
  } catch (error) {
    console.log("error in fetching movie detail",error.message || error);
    throw error
  }
}
export const getMovieTrailer=async(movieId)=>{
  try {
    const res=await fetch(`/api/movie/trailer/${movieId}`)
    const data=await res.json();
    const trailerId=data.trailer[0].key;
    return trailerId;
  } catch (error) {
    console.log("error in fetching movie trailer",error.message || error);
    throw error
  }
}
export const getTvTrailer=async(tvId)=>{
  try {
    const res=await fetch(`/api/tv/trailer/${tvId}`)
    const data=await res.json();
    const trailerId=data.trailer?.[0]?.key;
    return trailerId;
  } catch (error) {
    console.log("error in fetching tv trailer",error.message || error);
    throw error
  }
}
export const getTvDetail=async(tvId)=>{
  try {
    const res=await fetch(`/api/tv/detail/${tvId}`)
    const data=await res.json()
    return data.details;
  } catch (error) {
    console.log("error in fetching tv details",error.message||error);
    throw error
  }
}
export const getSimilarMovies=async(movieId)=>{
  try {
    const res=await fetch(`/api/movie/similar/${movieId}`);
    const data=await res.json()
    if (!res.ok) {
      throw new Error("error in fetching similar movies");
    }
    return data.content;
  } catch (error) {
    console.log("error in fetching similar movies" ,error.message || error);
    throw error;
  }
}
export const getSimilarTvs=async(tvId)=>{
    try {
      const res=await fetch(`/api/tv/similar/${tvId}`);
    const data=await res.json()
    if (!res.ok) {
      throw new Error("error in fetching similar movies");
    }
    return data.content;
    } catch (error) {
      console.log("error in fetching similar tv shows" , error.message || error);
    }
}