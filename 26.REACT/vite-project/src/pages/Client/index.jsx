import React, { useEffect, useState } from "react";
import ClientHeader from "../../components/Client/Header";
import { Outlet } from "react-router";
import { getAll } from "../../services";
import { endpoint } from "../../services/constant";

const ClientLayout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll(endpoint.products)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ClientHeader />
      <Outlet context={[products, setProducts]} />
    </>
  );
};

export default ClientLayout;
