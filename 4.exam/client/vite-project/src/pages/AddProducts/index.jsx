import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { ProductsContext } from "../../context/productsContext";
import Button from "@mui/material/Button";
import style from "./index.module.scss";
import { deleteOne, postOne } from "../../services";
import { endpoint } from "../../services/constant";
import { ProductsSchema } from "../../validations/productsValidations";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const AddProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
      postOne(endpoint.products, values)
        .then((response) => {
          getAll(products.endpoint)
            .then((response) => {
              setProducts(response.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
      resetForm();
    },
    validationSchema: ProductsSchema,
  });
  const rows = products.map((product) => ({
    id: product._id,
    title: product.title,
    price: product.price,
    description: product.description,
    image: product.image,
  }));
  function handleDelete(id) {
    deleteOne(endpoint.products, id).then((response) => {
      setProducts([...products].filter((x) => x._id !== id));
    });
  }
  return (
    <>
      <form id={style["addform"]} onSubmit={formik.handleSubmit}>
        <TextField
          label="Title"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          variant="outlined"
        />
        {formik.errors.title && formik.touched.title && (
          <div>{formik.errors.title}</div>
        )}
        <TextField
          label="Price"
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
          variant="outlined"
        />
        {formik.errors.price && formik.touched.price && (
          <div>{formik.errors.price}</div>
        )}

        <TextField
          label="Description"
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
          variant="outlined"
        />
        {formik.errors.description && formik.touched.description && (
          <div>{formik.errors.description}</div>
        )}
        <TextField
          label="Image"
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
          variant="outlined"
        />
        {formik.errors.image && formik.touched.image && (
          <div>{formik.errors.image}</div>
        )}
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={row.image}
                    alt={row.title}
                    width={100}
                    height={70}
                  />
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
                    <DeleteForeverIcon fontSize="large" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AddProducts;
