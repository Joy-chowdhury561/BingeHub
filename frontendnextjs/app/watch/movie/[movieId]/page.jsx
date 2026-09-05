import WatchMovie from "./watchMovie.jsx"
import { getMovieDetail } from "../../../../api calls/api.js";
export const generateMetadata=async({params})=>{
    const {movieId}=await params;
    const data=await getMovieDetail(movieId);
    return{
        title:`${data.name || data.title||data.original_title} | BingeHub`,
        description:`${data.name || data.title||data.original_title} watch on BingeHub`
    }
}
const WatchMoviePage = () => {
  return (
    <>
    <WatchMovie/>
    </>
  )
}

export default WatchMoviePage
