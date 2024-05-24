import * as Yup from "yup";
export const ProductsSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")

    .required("Required"),
  price: Yup.number()
    .min(5, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  description: Yup.string().required("Required"),
  image: Yup.string().required("Required").url("Invalid URL"),
});
