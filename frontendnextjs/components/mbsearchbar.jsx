"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
const MbSearchBar = () => {
  const router = useRouter()
  const [query, setquery] = useState("")
  const handleSearch=(e)=>{
    e.preventDefault();
    if(query!==""){
      router.push(`/search/results/${query.replace(/[\!@#$%^()-=_+/&*]/g, " ")}`)
    }
    
  }
  return (
    <>
      <form onSubmit={handleSearch} className="flex sm:hidden fixed left-[5vw] focus:outline-white active:outline-white top-[clamp(3rem,5vh,10rem)]  z-50 w-[90%] h-10">
          <input value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Search movies/tv shows" className="bg-white/20 backdrop-blur-sm pr-4 active:outline-white w-full pl-12 rounded-3xl text-gray-200" type="search" name="" id="" />
        <img
          className="h-6 cursor-pointer absolute left-3 top-2"
          src="/searchIcon.svg"
          alt="search icon"
        />
        </form>
    </>
  )
}

export default MbSearchBar
