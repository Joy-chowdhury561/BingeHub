import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/layoutPage";
import Home from "./pages/homePage";
import Movies from "./pages/moviesPage";
import TVS from "./pages/tvsPage";
import MovieDetails from "./pages/moviedetails";
import TVDetails from "./pages/tvdetails";
import NotFound from "./pages/notfound";
import WatchMovie from "./pages/watchMovie";
import WatchTv from "./pages/watchTv";
import SearchPage from "./pages/searchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tvs", element: <TVS /> },
      {path:"/details/movie/:movieId",element:<MovieDetails/>},
      {path:"/details/tv/:TvId",element:<TVDetails/>},
      {path:"/watch/movie/:movieId",element:<WatchMovie/>},
      {path:"/watch/tv/:tvId",element:<WatchTv/>},
      {path:"/search/results/:query",element:<SearchPage/>}
    ],
  },
  {path:"*",element:<NotFound/>}
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
