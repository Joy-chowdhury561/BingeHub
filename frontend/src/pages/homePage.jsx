import { getTrendingAll,getAllCategory } from "../api/api.js";
import { useQuery } from "@tanstack/react-query";

import Hero from "../components/hero.jsx"
import Category from "../components/category.jsx";
const Home = () => {
  const {
    data: trending,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["trending content"],
    queryFn: getTrendingAll,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const {data:topRated,}=useQuery({
    queryKey:["top rated"],
    queryFn:()=>getAllCategory("top_rated"),
    retry:false,
    refetchOnWindowFocus:false,
    staleTime:Infinity
  })
  const {data:popular,}=useQuery({
    queryKey:["popular"],
    queryFn:()=>getAllCategory("popular"),
    retry:false,
    refetchOnWindowFocus:false,
    staleTime:Infinity
  })

  const {data:Upcoming,}=useQuery({
    queryKey:["Upcoming"],
    queryFn:()=>getAllCategory("upcoming", "on_the_air"),
    retry:false,
    refetchOnWindowFocus:false,
    staleTime:Infinity
  })

  

  if (isPending ) {
    return (
      <div className="flex h-[clamp(16rem,30vw,100rem)] items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (isError || !trending) {
    return (
      <div className="flex h-[clamp(16rem,30vw,100rem)] items-center justify-center text-white">
        Unable to load trending content.
      </div>
    );
  }
  
  
  

  return (
    <>
      <Hero trending={trending}/>
      <Category category={topRated} categoryName={"Top Rated"}/>
      <Category category={popular} categoryName={"Popular"}/>
      <Category category={Upcoming} categoryName={"Upcoming"}/>
    </>
  );
};

export default Home;
