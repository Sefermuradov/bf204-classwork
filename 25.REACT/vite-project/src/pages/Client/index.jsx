import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import ClientHeader from "../../components/Client";
import { getAll } from "../../services";
import { endpoint } from "../../services/constant";

const ClientLayout = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getAll(endpoint.countries)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ClientHeader />
      <Outlet context={[countries, setCountries]} />
    </>
  );
};

export default ClientLayout;
