import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Category from "../components/category.jsx";
import { getMovieDetail,getSimilarMovies } from "../api/api.js";
const WatchMovie = () => {
  const { movieId } = useParams();
  const { data: movieDetail,isPending } = useQuery({
    queryKey: ["movie detail", movieId],
    queryFn: () => getMovieDetail(movieId),
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const {data:similarMovies,isPending:fetchingSimilars}=useQuery({
    queryKey:["similar movies",movieId],
    queryFn:()=>getSimilarMovies(movieId),
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  })
  if(isPending){
    return <div>Loading...</div>
  }
  return (
    <>
    <div className="w-full  flex justify-center items-center flex-col">

      <div className="mt-32 sm:mt-0 flex flex-col items-center justify-center">
        <h1 className="text-white flex justify-center items-center w-[90%] overflow-clip text-ellipsis text-nowrap font-medium text-[clamp(1.5rem,2vw,10rem)]">
          {movieDetail.name || movieDetail.title || movieDetail.original_title }
        </h1>
        <iframe className="w-[clamp(25rem,70vw,200rem)] h-[clamp(21rem,40vw,200rem)]" allowFullScreen src={`https://vidsrc.sbs/embed/movie/${movieId}`} frameborder="0"></iframe>
      </div>
    </div>

      {!fetchingSimilars && <Category category={similarMovies} categoryName={"You may also like"} />}
        

    </>
  );
};

export default WatchMovie;
