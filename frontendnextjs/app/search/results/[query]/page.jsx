
import SearchPage from './searchPage'
export const generateMetadata=async({params})=>{
    const {query}=await params;
    return{
        title:`search results for ${query} | BingeHub`,
        description:`this page shows the search results for ${query} on BingeHub`
    }
}
const SearchPageEn = () => {
  return (
    <>
      <SearchPage/>
    </>
  )
}

export default SearchPageEn
