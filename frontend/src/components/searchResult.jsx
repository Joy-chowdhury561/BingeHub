import { useNavigate } from "react-router-dom"
import { IoStar } from "react-icons/io5";
const SearchResult = ({result}) => {
  const navigate=useNavigate();
  const goToDetails=()=>{
    if(result.media_type==="tv"){
      navigate(`/details/tv/${result.id}`)
    }else{
       navigate(`/details/movie/${result.id}`)
    }
  }
  return (
    <>
    <div onClick={goToDetails} className="h-110 pb-2 w-70 hover:border hover:border-green-400 hover:bg-[#333333] cursor-pointer hover:scale-105 duration-75  flex flex-col shrink-0 bg-[#1e1e1e] rounded-xl">
      <img className="h-[85%] rounded-tr-xl rounded-tl-xl" src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt="no poster available" />
        <p className="text-white w-[90%] overflow-clip text-nowrap text-ellipsis ml-2 font-medium text-[clamp(0.8rem,0.8vw,2rem)]" >{result.name || result.title || result.original_title}</p>
        <p className="text-gray-300 ml-2">{result.media_type}</p>
        <div className="flex items-center justify-between pr-2  ">
          <p className="text-gray-300 ml-2 ">{result.release_date?.split("-")[0] || result.first_air_date?.split("-")[0]}</p>
          <p className="flex items-center font-medium text-green-500"><IoStar className="text-green-500"/>{!result.vote_average?"0":result.vote_average?.toString().split(".")[0]} </p>
        </div>
    </div>
    </>
  )
}

export default SearchResult
