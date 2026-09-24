"use client"
import Category from "../../components/category.jsx";
import { useQuery } from "@tanstack/react-query";
import Hero from "../../components/hero.jsx";
import { getTrendingTv,getTvByCategory } from "../../api calls/api.js";
import Footer from "@/components/footer.jsx"
import Loader from "@/components/loader.jsx"
import AdBanner2 from "@/components/adBanner2.jsx"
const TVS = () => {
  const { data: trendingTv, isPending } = useQuery({
    queryKey: ["trending tv show"],
    queryFn: getTrendingTv,
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: topRatedTv } = useQuery({
    queryKey: ["top rated TV"],
    queryFn: () => getTvByCategory("top_rated"),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: popularTv } = useQuery({
    queryKey: ["popular tv shows"],
    queryFn: () => getTvByCategory("popular"),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const { data: UpcomingTv } = useQuery({
    queryKey: ["Upcoming tv shows"],
    queryFn: () => getTvByCategory("on_the_air"),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  if (isPending) {
    return (
      <Loader/>
    )
  }
  return (
    <>
      <Hero trending={trendingTv} />
      <AdBanner2/>
      <Category type="tv" tmdbCategory="top_rated" category={topRatedTv} categoryName={"Top Rated"}  />
      <Category type="tv" tmdbCategory="popular" category={popularTv} categoryName={"Popular"}/>
      <Category type="tv" tmdbCategory="on_the_air" category={UpcomingTv} categoryName={"Upcoming"} />
      <Footer isPending={isPending}/>
    </>
  );
};

export default TVS;
