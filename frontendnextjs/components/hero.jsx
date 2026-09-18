"use client"
import Image from "next/image"
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  const slides = Array.isArray(trending) ? trending : trending ? [trending] : [];

  if (slides.length === 0) {
    return null;
  }

  return (
    <Swiper
      aria-label="Trending movies and TV shows"
      modules={[Autoplay, Navigation, Pagination, A11y]}
      autoplay={{ delay: 3200, disableOnInteraction: false }}
      navigation={{
        nextEl: ".hero-swiper-next",
        prevEl: ".hero-swiper-prev",
      }}
      pagination={{ clickable: true }}
      loop={slides.length > 1}
      className="h-130 w-full [--swiper-pagination-color:#22c55e]"
    >
      {slides.map((slide) => {
        const genres = slide.genre_ids?.map((id) => genreMap[id]).filter(Boolean).join(" / ");
        const rating = Number(slide.vote_average ?? 0).toFixed(1);
        const title = slide.name || slide.title || slide.original_title;
        const detailsPath = slide.media_type === "tv" ? `/details/tv/${slide.id}` : `/details/movie/${slide.id}`;
        const imageUrl = `https://image.tmdb.org/t/p/original/${slide.poster_path}`;

        return (
          <SwiperSlide key={`${slide.media_type || "content"}-${slide.id}`}>
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="relative h-full w-full bg-cover bg-center"
            >
              <div className="absolute h-full w-full bg-black/10 backdrop-blur-2xl" />
              <div className="absolute flex h-full w-full items-center justify-center">
                <div className="absolute bottom-[5%] left-5 z-10 font-bold">
                  <h1 className="w-[70vw] overflow-hidden text-ellipsis text-nowrap text-[clamp(1.5rem,2vw,10rem)] text-white">
                    {title}
                  </h1>
                  <p className="w-[60vw] overflow-hidden text-ellipsis text-nowrap text-[clamp(0.7rem,1vw,2rem)] text-gray-300 sm:w-[20vw]">
                    {genres}
                  </p>
                  <p className="flex items-center gap-0.5 text-yellow-400">
                    <IoStar />
                    {rating}
                  </p>
                  <Link href={detailsPath}>
                    <button className="mt-2 rounded-3xl bg-linear-to-b from-green-500 to-green-900 px-7 py-3 text-white duration-75 ease-in-out hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]">
                      Watch
                    </button>
                  </Link>
                </div>
                <Image
                  width={350}
                  height={350}
                  className="shrink-0"
                  src={imageUrl}
                  alt={`${title} poster`}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <button
        type="button"
        className="hero-swiper-prev hidden absolute left-4 top-1/2 z-20 sm:flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Previous trending title"
      >
        <IoChevronBack aria-hidden="true" />
      </button>
      <button
        type="button"
        className="hero-swiper-next absolute hidden right-4 top-1/2 z-20 sm:flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Next trending title"
      >
        <IoChevronForward aria-hidden="true" />
      </button>
    </Swiper>
  );
};

export default Hero;
