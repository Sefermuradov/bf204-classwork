import React, { useContext } from "react";
import style from "./index.module.scss";
import { BasketContext } from "../../context/basketContext";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
const Basket = () => {
  const { basket, setBasket, setLocalBasket } = useContext(BasketContext);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {basket &&
            basket.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                  <div className={style.card}>
                    <div className={style.cardimg}>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={style.cardbody}>
                      <h2>{product.title}</h2>
                      <p className={style.price}>${product.price}</p>
                      <p>{product.description}</p>
                      <p> Count: {product.count}</p>
                      <div className={style.buttons}>
                        <Button
                          onClick={() => {
                            const updated = basket.find(
                              (x) => x._id === product._id
                            );
                            updated.count += 1;
                            setBasket([...basket]);
                            setLocalBasket([...basket]);
                          }}
                          size="small"
                          variant="contained"
                        >
                          +
                        </Button>
                        <Button
                          onClick={() => {
                            const updated = basket.filter(
                              (x) => x._id !== product._id
                            );
                            setBasket(updated);
                            setLocalBasket(updated);
                          }}
                          size="small"
                          color="error"
                          variant="contained"
                        >
                          remove
                        </Button>
                        <Button
                          onClick={() => {
                            const updated = basket.find(
                              (x) => x._id === product._id
                            );
                            if (updated.count > 1) {
                              updated.count -= 1;
                              setBasket([...basket]);
                              setLocalBasket([...basket]);
                            } else {
                              const updated = basket.filter(
                                (x) => x._id !== product._id
                              );
                              setBasket(updated);
                              setLocalBasket(updated);
                            }
                          }}
                          variant="contained"
                          size="small"
                        >
                          -
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
        </Grid>
        <Button
          style={{
            width: "100%",
            marginTop: "50px",
            padding: "10px",
            background: "red",
          }}
          onClick={() => {
            setBasket([]);
            setLocalBasket([]);
          }}
          variant="contained"
          size="small"
        >
          Order
        </Button>
      </Container>
    </>
  );
};

export default Basket;
