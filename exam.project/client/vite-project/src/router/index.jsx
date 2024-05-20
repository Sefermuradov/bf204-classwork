import MainRoot from "../pages/index"
import Home from "../pages/Home"
import DetailProduct from "../pages/DetailProduct"
import AddProduct from "../pages/AddProduct"
import Basket from "../pages/Basket"

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/:id",
                element: <DetailProduct />
            },
            {
                path: "addproduct",
                element: <AddProduct />
            },
            {
                path: "basket",
                element: <Basket />
            }
        ]

    }
]