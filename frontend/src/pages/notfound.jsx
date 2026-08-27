import NotfoundImg from "../public/notfound.png"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
      <div className="h-screen w-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${NotfoundImg})` }} >
        <div className="h-full w-full bg-black/10 backdrop-blur-sm"></div>
          <h1 className="text-white top-[30vh] absolute font-bold text-[clamp(2rem,3vw,10rem)]">Lost kid?</h1>
          <div className="top-[40vh] absolute flex flex-col justify-center items-center gap-1">
            <p className="text-white ">Go back to home </p> <Link  to="/"><button className="cursor-pointer bg-linear-to-b from-green-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:scale-115 duration-300 px-10 py-3 rounded-3xl to-green-800 text-white font-bold">Home</button> </Link>
          </div>
      </div>
    </>
  )
}

export default NotFound
