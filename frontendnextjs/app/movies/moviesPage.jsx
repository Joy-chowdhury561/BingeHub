"use client"
import Footer from "@/components/footer.jsx";
import Hero from "../../components/hero.jsx";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovie, getMovieByCategory } from "../../api calls/api.js";
import Category from "../../components/category.jsx";
import Loader from "@/components/loader.jsx"
import AdBanner2 from "@/components/adBanner2.jsx"
const Movies = () => {
  const { data: trendingMovie, isPending } = useQuery({
    queryKey: ["trending movie"],
    queryFn: getTrendingMovie,
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: topRatedMovie } = useQuery({
    queryKey: ["top rated movies"],
    queryFn: () => getMovieByCategory("top_rated"),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: popularMovie } = useQuery({
    queryKey: ["popular movies"],
    queryFn: () => getMovieByCategory("popular"),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const { data: UpcomingMovie } = useQuery({
    queryKey: ["Upcoming movies"],
    queryFn: () => getMovieByCategory("upcoming"),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  if (isPending) {
    return (
      <Loader/>
    );
  }
  return (
    <>
    
      <Hero trending={trendingMovie} />
      <AdBanner2/>
      <Category type="movies" tmdbCategory="top_rated" category={topRatedMovie} categoryName={"Top Rated"}/>
      <Category type="movies" tmdbCategory="popular" category={popularMovie} categoryName={"Popular"}/>
      <Category type="movies" tmdbCategory="upcoming" category={UpcomingMovie} categoryName={"Upcoming"}/>
      <Footer isPending={isPending}/>
    </>
  );
};


export default Movies;