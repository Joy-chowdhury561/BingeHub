"use client"
import Footer from "@/components/footer.jsx";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Category from "../../../../components/category.jsx";
import { getTvDetail, getSimilarTvs } from "../../../../api calls/api.js";
const WatchTv = () => {
  const { tvId } = useParams();
  const { data: tvDetail, isPending } = useQuery({
    queryKey: ["tv detail", tvId],
    queryFn: () => getTvDetail(tvId),
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: similarTvs, isPending: fetchingSimilars } = useQuery({
    queryKey: ["similar tv shows", tvId],
    queryFn: () => getSimilarTvs(tvId),
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  if (isPending) {
    return <div className="flex h-[clamp(16rem,30vw,100rem)] items-center justify-center text-white">Loading...</div>;
  }
  return (
    <>
      <div className="w-full  flex justify-center items-center flex-col">
        <div className="mt-26 sm:mt-0 flex flex-col items-center justify-center">
          <h1 className="text-white flex justify-center items-center w-[90%] overflow-clip text-ellipsis text-nowrap font-medium text-[clamp(1.5rem,2vw,10rem)]">
            {tvDetail.name ||
              tvDetail.title ||
              tvDetail.original_title}
          </h1>
          <iframe
            className="w-[clamp(22rem,70vw,200rem)] h-[clamp(21rem,40vw,200rem)]"
            allowFullScreen
            src={`https://vidsrc.sbs/embed/tv/${tvId}/1/1`}
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      {!fetchingSimilars && (
        <Category category={similarTvs} categoryName={"You may also like"} />
      )}
      <Footer isPending={isPending}/>
    </>
  );
};

export default WatchTv;
