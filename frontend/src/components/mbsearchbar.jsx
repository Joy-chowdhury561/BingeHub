import searchIcon from "../public/searchIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MbSearchBar = () => {
  const navigate=useNavigate()
  const [query, setquery] = useState("")
  const handleSearch=(e)=>{
    e.preventDefault();
    if(query!==""){
       navigate(`/search/results/${query.replace(/[\!@#$%^()-=_+/&*]/g, " ")}`)
    }
    
  }
  return (
    <>
      <form onSubmit={handleSearch} className="flex sm:hidden fixed left-[5vw] backdrop-blur-md focus:outline-white active:outline-white top-[clamp(4.2rem,7.5vh,10rem)]  z-50 w-[90%] h-10">
          <input value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Search movies/tv shows" className="bg-white/20 pr-4 active:outline-white w-full pl-12 rounded-3xl text-gray-200" type="search" name="" id="" />
        <img
          className="h-6 cursor-pointer absolute left-3 top-2"
          src={searchIcon}
          alt="search icon"
        />
        </form>
    </>
  )
}

export default MbSearchBar
