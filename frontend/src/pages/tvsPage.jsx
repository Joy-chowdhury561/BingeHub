import Category from "../components/category";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/hero";
import { getTrendingTv,getTvByCategory } from "../api/api.js";
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
      <div className="text-white w-full h-full flex justify-center items-center">
        {" "}
        loading...
      </div>
    );
  }
  return (
    <>
      <title>TV shows | BingeHub</title>
      <meta
        name="description"
        content="Browse huge collection tv shows on BingeHub"
      />
      <Hero trending={trendingTv} />
      <Category category={topRatedTv} categoryName={"Top Rated"}  />
      <Category category={popularTv} categoryName={"Popular"}/>
      <Category category={UpcomingTv} categoryName={"Upcoming"} />
    </>
  );
};

export default TVS;
