import searchIcon from "../public/searchIcon.svg";

const MbSearchBar = () => {
  return (
    <>
      <div className="flex sm:hidden fixed left-[5vw] top-[clamp(4.2rem,7.5vh,10rem)]  z-50 w-[90%] h-10">
          <input placeholder="Search movies/tv shows" className="bg-white/20 pr-4 active:outline-white w-full pl-12 rounded-2xl text-gray-200" type="search" name="" id="" />
        <img
          className="h-6 cursor-pointer absolute left-3 top-2"
          src={searchIcon}
          alt="search icon"
        />
        </div>
    </>
  )
}

export default MbSearchBar
