import Movies from "./moviesPage.jsx"
export async function generateMetadata() {
  return {
    title: "Movies | BingeHub",
    description: "Browse huge collection of movies on BingeHub for free",
  };
}
const MoviesPage = () => {
  
  return (
    <Movies/>
  )
}

export default MoviesPage

