"use server"
const devBackendUrl="http://localhost:8000"
export const getTrendingAll = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/movie/trendingAll`,{
      next:{
        revalidate:30
      }
    });
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
    const res = await fetch(`${process.env.BACKEND_URL}/api/movie/${category}`,{
      next:{
        revalidate:30
      }
    });
    if (!res.ok) {
      throw new Error("error in fetching movies by category");
    }
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.log("error in getting top rated", error.message || error);
    throw error;
  }
};
export const getTvByCategory = async (category) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/tv/${category}`,{
      next:{
        revalidate:30
      }
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("error in fetching tv shows by category");
    }
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
    const Movieres = await fetch(`${process.env.BACKEND_URL}/api/movie/${movieCategory}`,{
      next:{
        revalidate:30
      }
    });
    const Tvres = await fetch(`${process.env.BACKEND_URL}/api/tv/${tvCategory}`,{
      next:{
        revalidate:30
      }
    });
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
    const res = await fetch(`${process.env.BACKEND_URL}/api/movie/trendingMovie`,{
      next:{
        revalidate:30
      }
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("error in fetching trending movies");
    }
    return data.content;
  } catch (error) {
    console.log("error in getting trending movie", error.message || error);
    throw error;
  }
};
export const getTrendingTv=async()=>{
    try {
        const res=await fetch(`${process.env.BACKEND_URL}/api/tv/trendingTv`,{
          next:{
            revalidate:30
          }
        });
        const data=await res.json()
        if (!res.ok) {
      throw new Error("error in fetching trending tv show");
    }
        return data.content
    } catch (error) {
        console.log("error in getting trending tv show",error.message || error);
        throw error
    }
}
export const getMovieDetail=async(id)=>{
  try {
    const res=await fetch(`${process.env.BACKEND_URL}/api/movie/detail/${id}`,{
      next:{
        revalidate:3600
      }
    })
    const data=await res.json()
    if (!res.ok) {
      throw new Error("error in fetching  movies detail");
    }
    return data.details;
  } catch (error) {
    console.log("error in fetching movie detail",error.message || error);
    throw error
  }
}
export const getMovieTrailer=async(movieId)=>{
  try {
    const res=await fetch(`${process.env.BACKEND_URL}/api/movie/trailer/${movieId}`,{
      next:{
        revalidate:3600
      }
    })
    const data=await res.json();
    if (!res.ok) {
      throw new Error("error in fetching movies trailer");
    }
    const trailerId=data.trailer[0].key;
    return trailerId;
  } catch (error) {
    console.log("error in fetching movie trailer",error.message || error);
    throw error
  }
}
export const getTvTrailer=async(tvId)=>{
  try {
    const res=await fetch(`${process.env.BACKEND_URL}/api/tv/trailer/${tvId}`,{
      next:{
        revalidate:3600
      }
    })
    const data=await res.json();
    if (!res.ok) {
      throw new Error("error in fetching tv shows trailer");
    }
    const trailerId = data.trailer?.[0]?.key ?? null;
    return trailerId;
  } catch (error) {
    console.log("error in fetching tv trailer",error.message || error);
    throw error
  }
}
export const getTvDetail=async(tvId)=>{
  try {
    const res=await fetch(`${process.env.BACKEND_URL}/api/tv/detail/${tvId}`,{
      next:{
        revalidate:3600
      }
    })
    const data=await res.json()
    if (!res.ok) {
      throw new Error("error in fetching tv details");
    }
    return data.details;
  } catch (error) {
    console.log("error in fetching tv details",error.message||error);
    throw error
  }
}
export const getSimilarMovies=async(movieId)=>{
  try {
    const res=await fetch(`${process.env.BACKEND_URL}/api/movie/similar/${movieId}`,{
      next:{
        revalidate:600
      }
    });
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
      const res=await fetch(`${process.env.BACKEND_URL}/api/tv/similar/${tvId}`,{
      next:{
        revalidate:3600
      }
    });
    const data=await res.json()
    if (!res.ok) {
      throw new Error("error in fetching similar movies");
    }
    return data.content;
    } catch (error) {
      console.log("error in fetching similar tv shows" , error.message || error);
      throw error
    }
}
export const Search=async(query)=>{
  try {
    const res=await fetch(`${process.env.BACKEND_URL}/api/search/all/${query}`,{
      next:{
        revalidate:60
      }
    });
    const data=await res.json();
    return data.searchResult;
  } catch (error) {
    console.log("error in fetching search results",error.message || error);
    throw error
  }
}