import TVDetails from "./tvDetails.jsx"
import { getTvDetail } from "../../../../api calls/api.js";
export async function generateMetadata({ params }) {
  const { tvId } = await params;

  const  data  = await getTvDetail(tvId);

  return {
    title:`${data.name ||data.title||data.original_title} - Details | BingeHub`,
    description: `${data.overview} details on BingeHub`,
  };
}
const TVDetailsPage = () => {
  return (
    <>
      <TVDetails/>
    </>
  )
}

export default TVDetailsPage
