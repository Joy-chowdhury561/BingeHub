import searchIcon from "../public/searchIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PcSearchBar = () => {
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
      <form onSubmit={handleSearch} className="hidden sm:flex relative w-[40%] h-12">
          <input value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Search movies/tv shows" className="bg-white/20 focus:outline-white pr-4 active:outline-white w-full pl-12 rounded-3xl text-gray-200" type="search" name="" id="" />
        <img
          className="h-6 cursor-pointer absolute left-3 top-3"
          src={searchIcon}
          alt="search icon"
        />
        </form>
    </>
  )
}

export default PcSearchBar
