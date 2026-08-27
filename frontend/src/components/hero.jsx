import { IoStar } from "react-icons/io5";
import {Link} from "react-router-dom"
const Hero = ({trending}) => {
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10765:"Sci-Fi & Fantasy",
    10759:"Action & Adventure"
  };
  const genres = trending.genre_ids.map((id) => genreMap[id]).join(" / ");
  const rating = trending.vote_average.toString().split(".")[0];
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${trending.poster_path})`,
        }}
        className={`relative bg-cover bg-center h-130 w-full`}
      >
        <div className="bg-black/10 absolute h-full w-full backdrop-blur-2xl" />
        <div className="absolute h-full w-full flex justify-center">
          <div className="left-5 bottom-[5%] absolute font-bold ">
            <h1 className="text-white text-nowrap w-[70vw] overflow-hidden text-ellipsis text-[clamp(1.5rem,2vw,10rem)]">
              {trending.name || trending.title || trending.original_title}
            </h1>
            <p className="text-gray-300 text-[clamp(0.7rem,1vw,2rem)]  w-[60vw] sm:w-[20vw] text-nowrap text-ellipsis overflow-hidden">
              {genres}
            </p>
            <p className="text-yellow-400 flex items-center gap-0.5">
              <IoStar />
              {rating}/10
            </p>
            <Link to={`${trending.media_type==="tv"?`/details/tv/${trending.id}`:`/details/movie/${trending.id}`}`}>
            
            <button className=" delay-100 ease-in-out cursor-pointer hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:scale-110 duration-75 text-white bg-linear-to-b from-green-500 to-green-900 rounded-3xl mt-2 py-3 px-7">
              Watch
            </button>
            </Link>
          </div>
          <img
            className="h-full shrink-0 "
            src={`https://image.tmdb.org/t/p/original/${trending.poster_path}`}
            alt="poster image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
