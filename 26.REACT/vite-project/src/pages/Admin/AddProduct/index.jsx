import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addOne } from "../../../services";
import { endpoint } from "../../../services/constant";
import { useFormik } from "formik";
import { ProductsSchema } from "../../../validations/productsValidations";

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      salePrice: "",
      costPrice: "",
      imgSrc: "",
      discountPercentage: "",
      description: "",
      stockCount: "",
    },
    onSubmit: (values, { resetForm }) => {
      addOne(endpoint.products, values)
        .then((result) => {
          toast.success("new product added!");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
      resetForm();
    },
    validationSchema: ProductsSchema,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "110px",
        }}
      >
        <h2 style={{ fontWeight: "400" }}>Add New Product</h2>
        <div>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.name}
            id="outlined-basic"
            type="text"
            label="product name"
            variant="outlined"
            sx={{ marginRight: "15px" }}
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          )}
          <TextField
            onChange={formik.handleChange}
            value={formik.values.imgSrc}
            id="outlined-basic"
            type="text"
            label="product image source"
            variant="outlined"
            name="imgSrc"
          />
          {formik.errors.imgSrc && formik.touched.imgSrc && (
            <div style={{ color: "red" }}>{formik.errors.imgSrc}</div>
          )}
        </div>
        <div>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.costPrice}
            id="outlined-basic"
            type="number"
            label="product cost price"
            variant="outlined"
            sx={{ marginRight: "15px" }}
            name="costPrice"
          />
          {formik.errors.costPrice && formik.touched.costPrice && (
            <div style={{ color: "red" }}>{formik.errors.costPrice}</div>
          )}
          <TextField
            onChange={formik.handleChange}
            value={formik.values.salePrice}
            id="outlined-basic"
            type="number"
            label="product sale price"
            variant="outlined"
            name="salePrice"
          />
          {formik.errors.salePrice && formik.touched.salePrice && (
            <div style={{ color: "red" }}>{formik.errors.salePrice}</div>
          )}
        </div>
        <div>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.discountPercentage}
            id="outlined-basic"
            type="number"
            label="product discount percentage"
            variant="outlined"
            sx={{ marginRight: "15px" }}
            name="discountPercentage"
          />
          {formik.errors.discountPercentage &&
            formik.touched.discountPercentage && (
              <div style={{ color: "red" }}>
                {formik.errors.discountPercentage}
              </div>
            )}
          <TextField
            onChange={formik.handleChange}
            value={formik.values.stockCount}
            id="outlined-basic"
            type="number"
            label="product stock count"
            variant="outlined"
            name="stockCount"
          />
          {formik.errors.stockCount && formik.touched.stockCount && (
            <div style={{ color: "red" }}>{formik.errors.stockCount}</div>
          )}
        </div>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.description}
          label="product description"
          multiline
          rows={5}
          sx={{ width: "30%" }}
          name="description"
        />
        {formik.errors.description && formik.touched.description && (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        )}
        <Button variant="contained" type="submit" color="error">
          add product
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};
export default AddProduct;
