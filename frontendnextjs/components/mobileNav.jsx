"use client";
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiFilmReelFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
const MobileNav = () => {
  const currentLocation = usePathname();
  const [page, setpage] = useState("home");
  useEffect(() => {
    const changePage = () => {
      if (currentLocation === "/") {
        return setpage("home");
      }
      if (currentLocation === "/movies") {
        return setpage("movies");
      }
      if (currentLocation === "/tvs") {
        return setpage("tv shows");
      } else {
        setpage("other");
      }
    };
    changePage();
  }, [currentLocation]);
  return (
    <>
      <div className="w-full p-2.5 flex items-center justify-evenly bg-gray-950 rounded-t-2xl  sticky sm:hidden bottom-0 right-0 left-0">
        <Link href="/">
          <div className={`text-gray-500 ${page==="tv shows"?"text-green-500":"text-gray-500"} text-[clamp(0.8rem,1vw,2rem)] flex flex-col items-center`}>
            <IoMdHome
              className={`${page === "home" ? "text-green-500 drop-shadow-[0_0_12px_#22c55e]" : "text-gray-500"} text-3xl`}
            />
            Home
          </div>
        </Link>
        <Link href="/movies">
          <div className={`text-gray-500 ${page==="tv shows"?"text-green-500":"text-gray-500"} text-[clamp(0.8rem,1vw,2rem)] flex flex-col items-center`}>
            <BiSolidMoviePlay
              className={`${page === "movies" ? "text-green-500 drop-shadow-[0_0_12px_#22c55e]" : "text-gray-500"} text-3xl`}
            />
            Movies
          </div>
        </Link>
        <Link href="/tvs">
          <div className={`text-gray-500 ${page==="tv shows"?"text-green-500":"text-gray-500"} text-[clamp(0.8rem,1vw,2rem)] flex flex-col items-center`}>
            <PiFilmReelFill
              className={`${page === "tv shows" ? "text-green-500 drop-shadow-[0_0_12px_#22c55e]" : "text-gray-500"} text-3xl`}
            />
            Tv shows
          </div>
        </Link>
      </div>
    </>
  );
};

export default MobileNav;
