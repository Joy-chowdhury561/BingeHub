import CategoryPage from "./categoryPage";
export async function generateMetadata({ params }) {
    const{type,category}=await params;

  return {
    title: `${category.replaceAll("_"," ")} - ${type} on BingeHub`,
    description: `Browse ${category.replaceAll("_"," ")} - ${type} on BingeHub`,
  };
}
const Page = () => <CategoryPage />;

export default Page;
