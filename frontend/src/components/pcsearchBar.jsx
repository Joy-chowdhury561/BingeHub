import searchIcon from "../public/searchIcon.svg";

const PcSearchBar = () => {
  return (
    <>
      <div className="hidden sm:flex relative w-[40%] h-12">
          <input placeholder="Search movies/tv shows" className="bg-white/20 pr-4 active:outline-white w-full pl-12 rounded-2xl text-gray-200" type="search" name="" id="" />
        <img
          className="h-6 cursor-pointer absolute left-3 top-3"
          src={searchIcon}
          alt="search icon"
        />
        </div>
    </>
  )
}

export default PcSearchBar
