import { useNavigate } from "react-router-dom"

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
    
    <div onClick={goToDetails} className="h-full pb-2 hover:bg-[#333333] cursor-pointer hover:scale-105 duration-75 w-fit flex flex-col shrink-0  items-center bg-[#1e1e1e] rounded-xl">
      <img className="h-[92%] " src={`https://image.tmdb.org/t/p/original/${banner.poster_path}`} alt="poster" />
        <p className="text-gray-300 font-medium text-[clamp(0.7rem,0.7vw,2rem)]" >{banner.name || banner.title || banner.original_title}</p>
    </div>

    </>
  )
}

export default Banner
