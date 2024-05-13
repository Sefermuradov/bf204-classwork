
import { Outlet } from "react-router";
import AdminHeader from "../../components/Admin/Header"
import React, { useEffect, useState } from "react";
import { getAll } from "../../services";
import { endpoint } from "../../services/constant";
const AdminLayout = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getAll(endpoint.countries)
      .then((response) => {
        setdata(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <AdminHeader />
      <Outlet context={[data, setdata]}/>
    </>
  );
};

export default AdminLayout;
