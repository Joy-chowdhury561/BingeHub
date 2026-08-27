import logo from "../public/logo.png";
import { Link } from "react-router-dom";
import PcSearchBar from "./pcsearchBar.jsx"
import MbSearchBar from "./mbsearchbar.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [page, setpage] = useState("home");
  const location = useLocation();
  const currentLocation = location.pathname;
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
      <div className="bg-black/30 flex z-50 justify-evenly items-center backdrop-blur-md fixed sm:sticky top-0 right-0 left-0 w-full ">
        <Link to="/">
          <div className="flex cursor-pointer items-center">
            <img className="h-[clamp(4rem,5vw,50rem)]" src={logo} alt="logo" />
            <h1 className="hidden md:block text-4xl text-green-400 font-bold">
              BingeHub
            </h1>
          </div>
        </Link>
        <div className="flex gap-[clamp(13px,1vw,3rem)]">
          <Link to="/">
            <p
              className={`font-medium delay-100 hover:text-green-500 cursor-pointer ${page === "home" ? "text-green-500" : "text-amber-50"} text-amber-50 text-[clamp(0.8rem,1vw,3rem)] `}
            >
              Home
            </p>
            {page === "home" && (
              <div className="w-full h-1 bg-green-500 rounded-2xl"></div>
            )}
          </Link>
          <Link to="/movies">
            <p
              className={`font-medium delay-100 hover:text-green-500 cursor-pointer ${page === "movies" ? "text-green-500" : "text-amber-50"} text-amber-50 text-[clamp(0.8rem,1vw,3rem)] `}
            >
              Movies
            </p>
            {page === "movies" && (
              <div className="w-full h-1 bg-green-500 rounded-2xl"></div>
            )}
          </Link>

          <Link to="/tvs">
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
        <PcSearchBar/>
      </div>
      <MbSearchBar />
    </>
  );
};

export default Navbar;
