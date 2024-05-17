import MainRoot from "../pages";
import Home from "../pages/Home";
import AddMenu from "../pages/AddMenu";
import MenuDetail from "../pages/MenuDetail";
import NotFound from "../pages/NotFound";
export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "menu-detail",
        element: <MenuDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
