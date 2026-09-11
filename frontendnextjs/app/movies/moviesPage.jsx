"use client"
import Footer from "@/components/footer.jsx";
import Hero from "../../components/hero.jsx";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovie, getMovieByCategory } from "../../api calls/api.js";
import Category from "../../components/category.jsx";
import Loader from "@/components/loader.jsx"
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
      <Category category={topRatedMovie} categoryName={"Top Rated"} mediaType="movie"/>
      <Category category={popularMovie} categoryName={"Popular"} mediaType="movie"/>
      <Category category={UpcomingMovie} categoryName={"Upcoming"} mediaType="movie"/>
      <Footer isPending={isPending}/>
    </>
  );
};


export default Movies;