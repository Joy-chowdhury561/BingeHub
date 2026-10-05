"use client";
import Footer from "@/components/footer.jsx";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import Category from "@/components/category.jsx";
import { getTvDetail, getSimilarTvs } from "@/api calls/api.js";
import Loader from "@/components/loader.jsx";
import AdBanner2 from "@/components/adBanner2.jsx";
import { useEffect, useState } from "react";
const WatchTv = () => {
  const { tvId, season, episode } = useParams();
  const router = useRouter();
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
  const [selectedSeason, setSelectedSeason] = useState(String(season));

  useEffect(() => {
    setSelectedSeason(String(season));
  }, [season]);

  if (isPending) {
    return <Loader />;
  }

  const selectedSeasonDetails = tvDetail.seasons.find(
    (seasonDetails) =>
      String(seasonDetails.season_number) === selectedSeason,
  );

  return (
    <>
      <div className="w-full px-6 gap-1   flex flex-col md:flex-row justify-center items-center ">
        <div className="mt-26 pb-1 sm:mt-0 w-[65%] flex flex-col items-center justify-center">
          <h1 className="text-white flex justify-center items-center overflow-clip text-ellipsis text-nowrap font-medium text-[clamp(0.9rem,2vw,10rem)]">
            {tvDetail.name || tvDetail.title || tvDetail.original_title}
          </h1>
          <AdBanner2 />
          <iframe
            className="w-[clamp(360px,60vw,200rem)] h-[clamp(250px,30vw,200rem)]"
            allowFullScreen
            src={`https://vidsrc.io/embed/tv/${tvId}/${season}/${episode}`}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="bg-[#36363622] rounded-2xl   shrink-0 h-[clamp(300px,30vw,200rem)] lg:h-auto w-87 md:w-70 lg:w-[clamp(350px,20%,600px)]">
          <div className="relative">
            <div className="p-5 flex gap-2 overflow-x-auto episode-scroll lg:flex-wrap">
              {tvDetail.seasons.map((seasonDetails) => {
                const seasonNumber = String(seasonDetails.season_number);
                return (
                  <button
                    type="button"
                    aria-pressed={selectedSeason === seasonNumber}
                    onClick={() => setSelectedSeason(seasonNumber)}
                    key={seasonDetails.id}
                    className={`w-fit ${
                      selectedSeason === seasonNumber
                        ? "bg-green-400 text-black"
                        : "bg-[#373737] text-white"
                    } rounded-xl px-4 py-0.5 font-medium cursor-pointer hover:bg-green-400 hover:text-black duration-100`}
                  >
                    {seasonNumber === "0" ? "Specials" : `S${seasonNumber}`}
                  </button>
                );
              })}
            </div>
            <div className="absolute lg:hidden right-0 top-0 bottom-0 z-10 w-10 bg-linear-to-r from-transparent to-black/50"></div>
          </div>

          <div className="max-h-[70%] episode-scroll overflow-y-auto px-5 pb-5">
            <div className="flex gap-2  flex-wrap">
              {Array.from(
                { length: selectedSeasonDetails?.episode_count ?? 0 },
                (_, index) => index + 1,
              ).map((episodeNumber) => (
                <button
                  key={episodeNumber}
                  type="button"
                  aria-label={`Season ${selectedSeason}, episode ${episodeNumber}`}
                  aria-pressed={
                    String(season) === selectedSeason &&
                    String(episode) === String(episodeNumber)
                  }
                  onClick={() =>
                    router.push(
                      `/watch/tv/${tvId}/${selectedSeason}/${episodeNumber}`,
                    )
                  }
                  className={`w-fit rounded-xl px-6 py-4 font-mono cursor-pointer hover:bg-green-400 hover:text-black duration-100 ${
                    String(season) === selectedSeason &&
                    String(episode) === String(episodeNumber)
                      ? "bg-green-400 text-black"
                      : "bg-[#373737] text-gray-300"
                  }`}
                >
                  {episodeNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {!fetchingSimilars && (
        <Category category={similarTvs} categoryName={"You may also like"} />
      )}
      <Footer isPending={isPending} />
    </>
  );
};

export default WatchTv;
