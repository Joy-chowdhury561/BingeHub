"use client"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import PcSearchBar from "./pcsearchBar.jsx"
import MbSearchBar from "./mbsearchbar.jsx";
import { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
const Navbar = () => {
  const [page, setpage] = useState("home");
  const currentLocation = usePathname();
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
      }else{
        setpage("other")
      }
    };
    changePage();
  }, [currentLocation]);

  return (
    <>
      <div className="sm:bg-black/30 gap-1 flex z-50 sm:justify-evenly sm:gap-0 justify-center items-center sm:backdrop-blur-md fixed sm:sticky top-0 right-0 left-0 w-full ">
        <Link href="/">
          <div className="flex cursor-pointer items-center">
            <Image priority="true" width={50} height={50} className="h-[clamp(3rem,5vw,50rem)] w-[clamp(3rem,5vw,50rem)]" src="/logo.png" alt="logo" />
            <h1 className="hidden md:block text-[clamp(1rem,2vw,6rem)] text-green-400 font-bold">
              BingeHub
            </h1>
          </div>
        </Link>
        <div className="hidden sm:flex gap-[clamp(13px,1vw,3rem)]">
          <Link href="/">
            <p
              className={`font-medium delay-100 hover:text-green-500 cursor-pointer ${page === "home" ? "text-green-500" : "text-amber-50"} text-amber-50 text-[clamp(0.8rem,1vw,3rem)] `}
            >
              Home
            </p>
            {page === "home" && (
              <div className="w-full h-1 bg-green-500 rounded-2xl"></div>
            )}
          </Link>
          <Link href="/movies">
            <p
              className={`font-medium delay-100 hover:text-green-500 cursor-pointer ${page === "movies" ? "text-green-500" : "text-amber-50"} text-amber-50 text-[clamp(0.8rem,1vw,3rem)] `}
            >
              Movies
            </p>
            {page === "movies" && (
              <div className="w-full h-1 bg-green-500 rounded-2xl"></div>
            )}
          </Link>

          <Link href="/tvs">
            <p
              className={`font-medium delay-100 hover:text-green-500 cursor-pointer ${page === "tv shows" ? "text-green-500" : "text-amber-50"} text-amber-50 text-[clamp(0.8rem,1vw,3rem)] `}
            >
              TV shows
            </p>
            {page === "tv shows" && (
              <div className="w-full h-1 bg-green-500 rounded-2xl"></div>
            )}
          </Link>
        </div>
        <h1 className="text-white font-bold text-xl sm:hidden ">BingeHub</h1>
        <PcSearchBar/>
        <a className="ml-10 sm:ml-0" href="/BingeHub.apk" download="BingeHub.apk">
        <div className="flex font-bold sm:bg-transparent sm:backdrop-blur-none bg-white/10 backdrop-blur-md items-center gap-1 px-2 py-2 border hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] border-green-500 rounded-3xl text-green-500 text-[clamp(0.7rem,1vw,2rem)]">
          <IoMdDownload className="text-green-500 text-[clamp(1rem,1vw,2rem)] " />
          DownLoad App
        </div>
        </a>
      </div>
      <MbSearchBar />
    </>
  );
};

export default Navbar;
