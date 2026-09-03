import Banner from "./banner"   

const Category = ({category,categoryName}) => {


  return (
    <>
    <div className="w-[90vw]  rounded-2xl border-l-2 border-green-500 pl-5 pt-5 bg-[#161616] h-[clamp(350px,25vw,50rem)] mx-auto my-10">
        <p className=" font-medium mb-5   text-white text-[clamp(1rem,1vw,5rem)] border-l-3 border-green-500" >🔥{categoryName}</p>
        <div className=" flex pb-5 p-3 items-center overflow-x-scroll overflow-y-clip gap-5 h-[85%]">
        {category?.map((content) => (
          <Banner key={content.id} banner={content}/>
        ))}
        </div>
      </div>
    </>
  )
}

export default Category
