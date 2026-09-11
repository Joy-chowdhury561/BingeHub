"use client"
import Footer from "@/components/footer.jsx"
import { useParams } from "next/navigation"
import SearchResult from "../../../../components/searchResult.jsx"
import {useQuery} from "@tanstack/react-query"
import {Search} from "../../../../api calls/api.js"
import Loader from "@/components/loader.jsx"
const SearchPage = () => {
   const {query}=useParams()
  const displayQuery = decodeURIComponent(query)
   const {data:searchResult,isPending}=useQuery({
    queryKey:["search result",query],
    queryFn:()=>Search(query),
    retry:false,
    fetchOnWindoFocus:false,
    staleTime:Infinity
   })

   if(isPending){
    return <Loader/>
   }
  return (
    <>
    <div className="w-full flex justify-center items-center  flex-col ">
      <h1 className="text-white text-[clamp(1.1rem,2vw,8rem)] flex items-center gap-2 mb-2 font-medium sm:mt-5 mt-30">Search results for <p className="text-green-500">{displayQuery}</p></h1>
      {searchResult?.length<=0 && <p className="text-red-500 text-xl mt-10">{`No results for ${displayQuery}`}</p>}
      <div className=" p-5 flex gap-5 justify-center flex-wrap w-[clamp(350px,80vw,100rem)]">
        {searchResult?.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))}
      </div>

    </div>
    <Footer isPending={isPending}/>
    </>
  )
}

export default SearchPage
