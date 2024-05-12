//admin
import AdminLayout from "../pages/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import AddCategory from "../pages/Admin/AddCategory";
import AddProduct from "../pages/Admin/AddProduct";
import AdminLogin from "../pages/Admin/Login";
import Messages from "../pages/Admin/Messages";
import Orders from "../pages/Admin/Orders";
import AdminProducts from "../pages/Admin/Products";
import Users from "../pages/Admin/Users";
//client
import ClientLayout from "../pages/Client";
import Home from "../pages/Client/Home";
import Basket from "../pages/Client/Basket";
import ContactUs from "../pages/Client/ContactUs";
import ClientLogin from "../pages/Client/Login";
import Register from "../pages/Client/Register";
import User from "../pages/Client/User";
import ClientProducts from "../pages/Client/Products";
import ProductDetail from "../pages/Client/ProductDetail";

export const ROUTES = [
  //admin
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  //client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <ClientLogin />,
      },
      {
        path: "login",
        element: <ClientLogin />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "products",
        element: <ClientProducts />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
];
