import WatchTv from "./watchTv"
import {getTvDetail} from "../../../../api calls/api.js"
export const generateMetadata=async({params})=>{
  const {tvId}=await params;
  const data= await getTvDetail(tvId)
    return{
      title:`${data.name || data.title || data.original_title} | BingeHub`,
      description:`${data.overview} watch on BingeHub`
    }
}
const WatchTvPage = () => {
  return (
    <>
      <WatchTv/>
    </>
  )
}

export default WatchTvPage
