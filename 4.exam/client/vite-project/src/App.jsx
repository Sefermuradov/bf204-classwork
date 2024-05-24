import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./router";
import { ProductsContext } from "./context/productsContext";
import { useEffect, useState } from "react";
import { getAll } from "./services/index";
import { endpoint } from "./services/constant";
import { BasketContext } from "./context/basketContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { FavoriteContext } from "./context/favoriteContext";
function App() {
  const router = createBrowserRouter(ROUTES);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [localBasket, setLocalBasket] = useLocalStorage("basket", []);
  const [favorite, setFavorite] = useState([]);
  const [localFavorite, setLocalFavorite] = useLocalStorage("favorite", []);

  useEffect(() => {
    getAll(endpoint.products)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setBasket(JSON.parse(localStorage.getItem("basket")));
    setFavorite(JSON.parse(localStorage.getItem("favorite")));
  }, []);

  return (
    <>
      <FavoriteContext.Provider
        value={{ favorite, setFavorite, localFavorite, setLocalFavorite }}
      >
        <BasketContext.Provider
          value={{ basket, setBasket, localBasket, setLocalBasket }}
        >
          <ProductsContext.Provider value={{ products, setProducts }}>
            <RouterProvider router={router} />
          </ProductsContext.Provider>
        </BasketContext.Provider>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
