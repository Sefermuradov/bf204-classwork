import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import style from "./index.module.scss";
import { Button, Container } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const product = products.find((x) => x._id === id);
  return (
    <>
      <section id={style["detail"]}>
        <Container>
          <div className={style.card}>
            <div className={style.cardimg}>
              <img src={product?.image} alt={product?.title} />
            </div>
            <div className={style.cardbody}>
              <h2>{product?.title}</h2>
              <p className={style.price}>${product?.price}</p>
              <p>{product?.description}</p>
              <div className={style.buttons}>
                <Button size="small" variant="contained">
                  <Link to={`/`}>back</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;
