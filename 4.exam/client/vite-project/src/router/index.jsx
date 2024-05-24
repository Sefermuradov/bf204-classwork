import MainRoot from "../pages/index";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import ProductDetail from "../pages/productDetail";

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
        path: "addproducts",
        element: <AddProducts />,
      },
      {
        path: "/:id",
        element: <ProductDetail />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
