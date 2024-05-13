//admin
import AdminLayout from "../pages/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import AdminCountries from "../pages/Admin/Countries";
import AddCountry from "../pages/Admin/AddCountry";
import Login from "../pages/Admin/Login";
import AdminCountryDetail from "../pages/Admin/CountryDetail";
//client
import ClientLayout from "../pages/Client";
import Home from "../pages/Client/Home";
import About from "../pages/Client/About";
import Contact from "../pages/Client/Contact";
import ClientCountryDetail from "../pages/Client/Countrydetail";
import ClientCountries from "../pages/Client/Countries";

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
        path: "countries",
        element: <AdminCountries />,
      },
      {
        path: "add-country",
        element: <AddCountry />,
      },
      {
        path: "countries/:id",
        element: <AdminCountryDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  ///client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "countries",
        element: <ClientCountries/>,
      },
      {
        path: "countries/:id",
        element: <ClientCountryDetail />,
      },
    ],
  },
];
