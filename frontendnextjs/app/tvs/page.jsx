import TVS from "./tvsPage";
export async function generateMetadata() {
  return {
    title: "TV Shows | BingeHub",
    description: "Browse huge collection tv shows and anime's on BingeHub for free",
  };
}
const TvsPage = () => {
  return (
    <TVS/>
  )
}

export default TvsPage
