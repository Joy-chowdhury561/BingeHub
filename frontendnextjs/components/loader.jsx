

const   Loader = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 ">
        <div className="h-[clamp(5rem,5vw,15rem)] spinner w-[clamp(5rem,5vw,15rem)] rounded-full border-t-gray-400 border-8">

        </div>
      </div>
    </>
  )
}

export default Loader
