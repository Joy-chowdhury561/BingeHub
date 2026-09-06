"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
const PcSearchBar = () => {
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
      <form onSubmit={handleSearch} className="hidden sm:flex relative w-[40%] h-[clamp(2rem,2.4vw,90rem)]">
          <input value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Search movies/tv shows" className="bg-white/20 focus:outline-white pr-4 h-full active:outline-white w-full pl-12 rounded-3xl text-gray-200" type="search" name="" id="" />
        <img
          className="h-[clamp(1rem,1.3vw,5rem)] cursor-pointer absolute left-3 top-[25%]"
          src="/searchIcon.svg"
          alt="search icon"
        />
        </form>
    </>
  )
}

export default PcSearchBar
