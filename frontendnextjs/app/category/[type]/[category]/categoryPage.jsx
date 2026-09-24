"use client";
import Footer from "@/components/footer.jsx";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Banner from "../../../../components/banner.jsx";
import Loader from "../../../../components/loader.jsx";
import {
  getAllCategory,
  getMovieByCategory,
  getTvByCategory,
} from "../../../../api calls/api.js";

const CategoryPage = () => {
  const { type, category } = useParams();
  const normalizedType = type?.toLowerCase();

  const {
    data: content = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["category", normalizedType, category],
    queryFn: () => {
      if (normalizedType === "movies") {
        return getMovieByCategory(category);
      }

      if (normalizedType === "Tv shows") {
        return getTvByCategory(category);
      }

      return getAllCategory(
        category,
        category === "upcoming" ? "on_the_air" : category,
      );
    },
    enabled: Boolean(category),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-white">
        Unable to load this category.
      </div>
    );
  }

  return (
    <>
      <main className="w-full flex justify-center items-center  flex-col ">
        <h1 className="text-white border-l-3 pl-5  border-l-green-500 text-[clamp(1.1rem,2vw,8rem)] flex items-center gap-2 mb-2 font-medium sm:mt-5 mt-30">
          {category.replaceAll("_", " ")}
        </h1>
        <div className=" p-5 flex gap-5 justify-center  flex-wrap w-[clamp(350px,80vw,100rem)]">
          {content.map((item) => (
            <Banner key={item.id} banner={item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
