import { useNavigate } from "react-router-dom"
import { IoStar } from "react-icons/io5";
const Banner = ({banner}) => {
  const navigate=useNavigate();
  const goToDetails=()=>{
    if(banner.media_type==="tv"){
      navigate(`/details/tv/${banner.id}`)
    }else{
       navigate(`/details/movie/${banner.id}`)
    }
  }
  return (
    <>
    <div onClick={goToDetails} className="h-full pb-2 w-fit hover:border hover:border-green-400 hover:bg-[#333333] cursor-pointer hover:scale-105 duration-75  flex flex-col shrink-0 bg-[#1e1e1e] rounded-xl">
      <img className="h-[85%] rounded-tr-xl rounded-tl-xl" src={`https://image.tmdb.org/t/p/original/${banner.poster_path}`} alt="no poster available" />
        <p className="text-white w-full overflow-clip text-nowrap text-ellipsis ml-2 font-medium text-[clamp(0.8rem,0.8vw,2rem)]" >{banner.name || banner.title || banner.original_title}</p>
        <div className="flex items-center justify-between pr-2  ">
          <p className="text-gray-300 ml-2 ">{banner.release_date?.split("-")[0] || banner.first_air_date?.split("-")[0]}</p>
          <p className="flex items-center font-medium text-green-500"><IoStar className="text-green-500"/>{banner.vote_average.toString().split(".")[0]} </p>
        </div>
    </div>
    </>
  )
}

export default Banner
