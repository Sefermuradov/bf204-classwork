import MainMovies from "../pages/MainMovies";
import DetailMovies from "../pages/DetailMovies";
import AddMovies from "../pages/AddMovies";
import MoviesRoot from "../pages";
export const ROUTES = [
  {
    path: "/",
    element: <MoviesRoot />,
    children: [
      {
        index: true,
        element: <MainMovies />,
      },
      {
        path: "detailmovies/:id",
        element: <DetailMovies />,
      },
      {
        path: "addmovies",
        element: <AddMovies />,
      },
    ],
  },
];
