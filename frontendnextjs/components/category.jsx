"use client"

import { useEffect, useRef, useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import Banner from "./banner"

const Category = ({category,categoryName}) => {
  const scrollRef = useRef(null)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current

    if (!scrollContainer) return

    const updateScrollButtons = () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth
      setCanScrollBack(scrollContainer.scrollLeft > 0)
      setCanScrollForward(scrollContainer.scrollLeft < maxScrollLeft - 1)
    }

    updateScrollButtons()
    scrollContainer.addEventListener("scroll", updateScrollButtons, { passive: true })
    window.addEventListener("resize", updateScrollButtons)

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollButtons)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [category])

  const scrollCategory = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * scrollRef.current.clientWidth * 0.8,
      behavior: "smooth",
    })
  }


  return (
    <>
    <div className="md:w-[97vw] w-full rounded-2xl border-l-2 md:border-green-500 pl-2 md:pl-5 md:pt-5 md:bg-[#161616] h-[clamp(320px,25vw,50rem)] mt-3 md:mx-auto md:my-10">
        <p className=" font-medium    text-white text-[clamp(1rem,1vw,5rem)] border-l-3 border-green-500" >🔥{categoryName}</p>
        <div className="relative h-[85%]">
          <div ref={scrollRef} className="relative z-0 flex banner-scroll md:px-2 py-5 items-center overflow-x-scroll overflow-y-clip gap-3 h-full">
          {category?.map((content) => (
            <Banner key={content.id} banner={content}/>
          ))}
          </div>
          {canScrollBack && (
            <button
              type="button"
              aria-label={`Scroll ${categoryName} backwards`}
              onClick={() => scrollCategory(-1)}
              className="absolute hidden md:block left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/75 p-2 text-2xl text-white hover:bg-green-500"
            >
              <IoChevronBack />
            </button>
          )}
          {canScrollForward && (
            <button
              type="button"
              aria-label={`Scroll ${categoryName} forwards`}
              onClick={() => scrollCategory(1)}
              className="absolute hidden md:block right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/75 p-2 text-2xl text-white hover:bg-green-500"
            >
              <IoChevronForward />
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Category
