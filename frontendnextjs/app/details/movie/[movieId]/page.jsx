import MovieDetails from "./movieDetails.jsx";
import { getMovieDetail } from "../../../../api calls/api.js";
export async function generateMetadata({params}){
    const {movieId}=await params;
    const data=await getMovieDetail(movieId)
    return{
        title:`${data?.name|| data?.title || data.original_title} - Details | BingeHub`,
        description:`${data.overview} details available on BingeHub`
    }
}
const MovieDetailsPage = () => {
  return (
    <>
      <MovieDetails />
    </>
  );
};

export default MovieDetailsPage;
