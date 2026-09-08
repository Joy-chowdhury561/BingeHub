"use client"
import Footer from "@/components/footer.jsx";
import { useEffect, useState } from "react";
import { PiFilmReelFill } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { getTvDetail, getTvTrailer } from "../../../../api calls/api.js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import  Link  from "next/link";
import Image from "next/image"
const TVDetails = () => {
  const {tvId} = useParams();
  const {
    data: tvDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["tv detail", tvId],
    queryFn: () => getTvDetail(tvId),
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: trailerId } = useQuery({
    queryKey: ["tv trailer id", tvId],
    queryFn: () => getTvTrailer(tvId),
    retry: false,
    fetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const [trimmedOverView, settrimmedOverView] = useState("");
  const overview = tvDetail?.overview || "";

  useEffect(() => {
    const generateOverviewFn = () => {
      if (overview.length > 180) {
        const trimmed = overview.split(" ").slice(0, 28).join(" ");
        settrimmedOverView(trimmed);
      } else {
        settrimmedOverView(overview);
      }
    };
    generateOverviewFn();
  }, [overview]);

  if (isPending) {
    return <div className="flex h-[clamp(16rem,30vw,100rem)] items-center justify-center text-white">Loading...</div>;
  }

  if (isError || !tvDetail) {
    return <div className="flex h-[clamp(16rem,30vw,100rem)] items-center justify-center text-white">Unable to load TV details.</div>;
  }

  const tvTitle = tvDetail.name || tvDetail.title || "Unknown title";

  return (
    <>
      <div className="w-full flex mt-26 sm:mt-0 gap-[2vw]">
        <Image height={350} width={350}
          className="h-[clamp(15rem,20vw,100rem)] w-[clamp(12rem,12vw,100rem)] ml-[2vw]"
          src={`https://image.tmdb.org/t/p/original${tvDetail.poster_path}`}
          alt={tvTitle}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-bold text-[clamp(2rem,3vw,10rem)]">
            {tvTitle}
          </h1>
          <p className="text-[clamp(1.2rem,1.5vw,2rem)] flex items-center text-white gap-1 font-medium">
            <PiFilmReelFill fill="white" /> | {tvDetail.origin_country?.[0] ?? "Unknown"} | {tvDetail.first_air_date?.slice(0, 4) ?? "Unknown"}
          </p>
          <p className="text-yellow-300 flex font-medium gap-1 items-center">
            <IoStar />
            {tvDetail.vote_average?.toString().split(".")[0] ?? "N/A"}/10
          </p>
          <p className="text-white text-xs font-bold">
            {tvDetail.genres?.map((genre) => genre.name).join("/")}
          </p>
          <p className="text-gray-300 w-[50vw] font-medium text-[clamp(0.9rem,1vw,2rem)]">
            {trimmedOverView}
            {overview ? "..." : ""}
          </p>
          <Link href={`/watch/tv/${tvId}`}>
          
          <button className="self-start font-bold ease-in-out cursor-pointer hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:scale-110 duration-100 text-white bg-linear-to-b from-green-500 to-green-900 rounded-3xl mt-2 p-2.5">
            Watch now
          </button>
          </Link>
        </div>
      </div>

      <div className="w-full mt-5 flex flex-col justify-center items-center">
        <h1 className="text-white text-[clamp(2rem,2vw,8rem)] font-bold">Trailer</h1>
        {trailerId ? (
          <iframe
            allowFullScreen
            className="mt-5 w-[clamp(22rem,60vw,200rem)] h-[clamp(18rem,40vw,100rem)]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src={`https://www.youtube.com/embed/${trailerId}`}
            title="TV trailer"
          ></iframe>
        ) : (
          <p className="text-white mt-5">No trailer available.</p>
        )}
      </div>
      <Footer isPending={isPending}/>
    </>
  );
};

export default TVDetails
